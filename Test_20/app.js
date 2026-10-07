/**
 * 20 TALIK TEST PLATFORMASI - ASOSIY DASTURIY LOGIKA (app.js)
 * Interaktiv test yechish, taymer, 1-20 palitra, natijalar tahlili va confetti
 */

// ============================================
// GLOBAL APPLICATION STATE
// ============================================
const AppState = {
    currentCategory: null,
    questions: [],         // Exactly 20 questions
    userAnswers: {},       // { questionIndex: selectedOptionIndex }
    flaggedQuestions: new Set(),
    currentIndex: 0,
    timerSeconds: 1200,    // 20 minutes default
    initialTimerSeconds: 1200,
    timerInterval: null,
    timeSpent: 0,
    instantMode: false,
    soundEnabled: true,
    theme: 'dark'
};

// Web Audio API for sound effects (Zero external files needed)
let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
    }
    return audioCtx;
}

function playSound(type) {
    if (!AppState.soundEnabled) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;

        if (type === 'click') {
            osc.frequency.setValueAtTime(450, now);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.08);
        } else if (type === 'select') {
            osc.frequency.setValueAtTime(550, now);
            osc.frequency.exponentialRampToValueAtTime(700, now + 0.12);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
            osc.start(now);
            osc.stop(now + 0.12);
        } else if (type === 'correct') {
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
        } else if (type === 'wrong') {
            osc.frequency.setValueAtTime(260, now);
            osc.frequency.setValueAtTime(220, now + 0.15);
            gain.gain.setValueAtTime(0.18, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'fanfare') {
            // Victory melody
            [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
                const noteOsc = ctx.createOscillator();
                const noteGain = ctx.createGain();
                noteOsc.connect(noteGain);
                noteGain.connect(ctx.destination);
                noteOsc.frequency.setValueAtTime(freq, now + (i * 0.12));
                noteGain.gain.setValueAtTime(0.15, now + (i * 0.12));
                noteGain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.12) + 0.3);
                noteOsc.start(now + (i * 0.12));
                noteOsc.stop(now + (i * 0.12) + 0.3);
            });
        }
    } catch (e) {
        // Fallback silently if audio not supported
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderCategories();
    loadHistory();
    setupKeyboardShortcuts();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('test_platform_theme') || 'dark';
    AppState.theme = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon();
}

function toggleTheme() {
    AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', AppState.theme);
    localStorage.setItem('test_platform_theme', AppState.theme);
    updateThemeIcon();
    playSound('click');
}

function updateThemeIcon() {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.textContent = AppState.theme === 'dark' ? '☀️' : '🌙';
    }
}

// Sound Toggle
function toggleSound() {
    AppState.soundEnabled = !AppState.soundEnabled;
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
        btn.textContent = AppState.soundEnabled ? '🔊' : '🔇';
    }
    showToast(AppState.soundEnabled ? "Ovoz yoqildi" : "Ovoz o'chirildi");
}

// ============================================
// CATEGORIES & HOME VIEW
// ============================================
function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    if (!grid) return;
    grid.innerHTML = '';

    Object.keys(TEST_CATEGORIES).forEach(catKey => {
        const cat = TEST_CATEGORIES[catKey];
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.style.setProperty('--card-gradient', cat.gradient || cat.color);

        let countLabel = "20 ta test";
        if (cat.id === "miks") {
            countLabel = "20 ta aralash test";
        }

        card.innerHTML = `
            <div>
                <div class="cat-top">
                    <div class="cat-icon-wrap">${cat.icon}</div>
                    <span class="cat-tag">${cat.badge}</span>
                </div>
                <h3 class="cat-name">${cat.title}</h3>
                <p class="cat-desc">${cat.description}</p>
            </div>
            <div class="cat-footer">
                <span class="cat-count">🎯 ${countLabel}</span>
                <button class="btn-start-cat" onclick="event.stopPropagation(); startTest('${cat.id}')">
                    Boshlash →
                </button>
            </div>
        `;

        card.onclick = () => startTest(cat.id);
        grid.appendChild(card);
    });
}

// ============================================
// TEST LAUNCH & SETUP (20 QUESTIONS)
// ============================================
function startTest(categoryId) {
    playSound('click');
    const cat = TEST_CATEGORIES[categoryId];
    if (!cat) return;

    AppState.currentCategory = cat;
    AppState.userAnswers = {};
    AppState.flaggedQuestions.clear();
    AppState.currentIndex = 0;
    AppState.timeSpent = 0;

    // Read settings
    const timerVal = parseInt(document.getElementById('timerSelect').value, 10);
    AppState.timerSeconds = timerVal;
    AppState.initialTimerSeconds = timerVal;
    AppState.instantMode = document.getElementById('instantModeToggle').checked;
    const doShuffle = document.getElementById('shuffleToggle').checked;

    // Prepare exactly 20 questions
    let rawQuestions = [];
    if (categoryId === 'miks' || categoryId === 'it_mega_mix') {
        // Collect from all other categories
        let pool = [];
        Object.keys(TEST_CATEGORIES).forEach(k => {
            if (k !== 'miks' && k !== 'it_mega_mix' && TEST_CATEGORIES[k].questions) {
                pool.push(...TEST_CATEGORIES[k].questions);
            }
        });
        pool = shuffleArray([...pool]);
        rawQuestions = pool.slice(0, 20);
    } else {
        rawQuestions = [...cat.questions];
        if (doShuffle) {
            rawQuestions = shuffleArray(rawQuestions);
        }
        // Ensure 20 questions
        rawQuestions = rawQuestions.slice(0, 20);
    }

    // Shuffle options if requested
    AppState.questions = rawQuestions.map(item => {
        if (!doShuffle) return { ...item };
        const originalCorrectOption = item.options[item.correct];
        const shuffledOpts = shuffleArray([...item.options]);
        const newCorrectIdx = shuffledOpts.indexOf(originalCorrectOption);
        return {
            ...item,
            options: shuffledOpts,
            correct: newCorrectIdx
        };
    });

    // Update active UI
    document.getElementById('activeSubjectTitle').textContent = cat.title;
    document.getElementById('activeSubjectIcon').textContent = cat.icon;
    document.getElementById('activeModeSubtitle').textContent = AppState.instantMode ? "20 Talik Mashq Rejimi" : "20 Talik Imtihon Rejimi";

    // Switch view
    switchView('testView');

    // Build question palette (1 to 20)
    renderPalette();

    // Render first question
    renderCurrentQuestion();

    // Start timer
    startTimer();
}

function shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ============================================
// TIMER ENGINE
// ============================================
function startTimer() {
    clearInterval(AppState.timerInterval);
    const timerBox = document.getElementById('timerBox');
    const display = document.getElementById('timerDisplay');

    if (AppState.timerSeconds <= 0) {
        display.textContent = "Cheksiz";
        timerBox.classList.remove('warning');
        return;
    }

    updateTimerDisplay();

    AppState.timerInterval = setInterval(() => {
        AppState.timerSeconds--;
        AppState.timeSpent++;
        updateTimerDisplay();

        if (AppState.timerSeconds <= 60 && AppState.timerSeconds > 0) {
            timerBox.classList.add('warning');
        } else {
            timerBox.classList.remove('warning');
        }

        if (AppState.timerSeconds <= 0) {
            clearInterval(AppState.timerInterval);
            playSound('wrong');
            showToast("Vaqt tugadi! Test yakunlanmoqda...");
            setTimeout(() => {
                finishTest();
            }, 1000);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const display = document.getElementById('timerDisplay');
    if (!display || AppState.timerSeconds <= 0) return;

    const m = Math.floor(AppState.timerSeconds / 60);
    const s = AppState.timerSeconds % 60;
    display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function formatDuration(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// ============================================
// RENDERING QUESTION & OPTIONS
// ============================================
function renderCurrentQuestion() {
    const qIndex = AppState.currentIndex;
    const qData = AppState.questions[qIndex];
    if (!qData) return;

    // Badges & Progress
    document.getElementById('qBadgeNum').textContent = `Savol ${qIndex + 1} / 20`;
    document.getElementById('progressText').textContent = `Savol: ${qIndex + 1} / 20`;
    
    const answeredCount = Object.keys(AppState.userAnswers).length;
    document.getElementById('answeredStatsText').textContent = `${answeredCount} / 20 ta belgilandi`;

    const percent = ((qIndex + 1) / 20) * 100;
    document.getElementById('progressBarFill').style.width = `${percent}%`;

    // Flag button state
    const flagBtn = document.getElementById('btnFlagQuestion');
    const flagText = document.getElementById('flagBtnText');
    if (AppState.flaggedQuestions.has(qIndex)) {
        flagBtn.classList.add('active');
        flagText.textContent = "Belgilandi 🚩";
    } else {
        flagBtn.classList.remove('active');
        flagText.textContent = "Eslab qolish";
    }

    // Question Text
    document.getElementById('questionText').textContent = qData.q;

    // Render Options
    const optContainer = document.getElementById('optionsContainer');
    optContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    const chosenAnswer = AppState.userAnswers[qIndex];
    const isAnswered = chosenAnswer !== undefined;

    qData.options.forEach((optText, i) => {
        const item = document.createElement('div');
        item.className = 'option-item';

        if (chosenAnswer === i) {
            item.classList.add('selected');
        }

        // Instant explanation styling
        if (AppState.instantMode && isAnswered) {
            item.classList.add('locked');
            if (i === qData.correct) {
                item.classList.add('correct');
            } else if (i === chosenAnswer) {
                item.classList.add('wrong');
            }
        }

        item.innerHTML = `
            <div class="opt-letter">${letters[i]}</div>
            <div class="opt-text">${optText}</div>
        `;

        item.onclick = () => selectOption(i);
        optContainer.appendChild(item);
    });

    // Instant Mode Explanation
    const explBox = document.getElementById('explanationBox');
    const explText = document.getElementById('explanationText');
    if (AppState.instantMode && isAnswered && qData.explanation) {
        explBox.classList.add('active');
        explText.textContent = qData.explanation;
    } else {
        explBox.classList.remove('active');
    }

    // Navigation buttons state
    document.getElementById('btnPrevQ').disabled = (qIndex === 0);
    const nextBtn = document.getElementById('btnNextQ');
    if (qIndex === 19) {
        nextBtn.textContent = "Oxirgi savol";
        nextBtn.disabled = true;
    } else {
        nextBtn.textContent = "Keyingi →";
        nextBtn.disabled = false;
    }

    // Update Palette active states
    updatePaletteActiveState();
}

function selectOption(optionIndex) {
    const qIndex = AppState.currentIndex;
    const qData = AppState.questions[qIndex];

    if (AppState.instantMode && AppState.userAnswers[qIndex] !== undefined) {
        return; // Don't allow changing answer in instant mode once tested
    }

    AppState.userAnswers[qIndex] = optionIndex;
    
    if (AppState.instantMode) {
        if (optionIndex === qData.correct) {
            playSound('correct');
        } else {
            playSound('wrong');
        }
    } else {
        playSound('select');
    }

    renderCurrentQuestion();
    renderPalette();

    // Auto next after 700ms in instant mode if correct, or allow user to read explanation
}

function clearCurrentAnswer() {
    const qIndex = AppState.currentIndex;
    if (AppState.userAnswers[qIndex] !== undefined) {
        delete AppState.userAnswers[qIndex];
        playSound('click');
        renderCurrentQuestion();
        renderPalette();
    }
}

function toggleFlagCurrentQuestion() {
    const qIndex = AppState.currentIndex;
    if (AppState.flaggedQuestions.has(qIndex)) {
        AppState.flaggedQuestions.delete(qIndex);
    } else {
        AppState.flaggedQuestions.add(qIndex);
    }
    playSound('click');
    renderCurrentQuestion();
    renderPalette();
}

// Navigation between 1..20
function nextQuestion() {
    if (AppState.currentIndex < 19) {
        AppState.currentIndex++;
        playSound('click');
        renderCurrentQuestion();
    }
}

function prevQuestion() {
    if (AppState.currentIndex > 0) {
        AppState.currentIndex--;
        playSound('click');
        renderCurrentQuestion();
    }
}

function jumpToQuestion(index) {
    if (index >= 0 && index < 20) {
        AppState.currentIndex = index;
        playSound('click');
        renderCurrentQuestion();
    }
}

// ============================================
// 1 TO 20 QUESTION PALETTE
// ============================================
function renderPalette() {
    const grid = document.getElementById('paletteGrid');
    if (!grid) return;
    grid.innerHTML = '';

    for (let i = 0; i < 20; i++) {
        const btn = document.createElement('button');
        btn.className = 'palette-btn';
        btn.textContent = i + 1;

        if (i === AppState.currentIndex) {
            btn.classList.add('current');
        }
        if (AppState.userAnswers[i] !== undefined) {
            btn.classList.add('answered');
        }
        if (AppState.flaggedQuestions.has(i)) {
            btn.classList.add('flagged');
        }

        btn.onclick = () => jumpToQuestion(i);
        grid.appendChild(btn);
    }
}

function updatePaletteActiveState() {
    const buttons = document.querySelectorAll('.palette-btn');
    buttons.forEach((btn, idx) => {
        if (idx === AppState.currentIndex) {
            btn.classList.add('current');
        } else {
            btn.classList.remove('current');
        }
    });
}

// ============================================
// FINISH TEST & MODAL
// ============================================
function promptFinishTest() {
    playSound('click');
    const answeredCount = Object.keys(AppState.userAnswers).length;
    const unanswered = 20 - answeredCount;

    const modalMsg = document.getElementById('finishModalMsg');
    if (unanswered > 0) {
        modalMsg.innerHTML = `Siz 20 ta savoldan <b>${answeredCount} tasiga</b> javob berdingiz.<br><span style="color: #f87171;">${unanswered} ta savol belgilanmay qolgan!</span><br>Rostdan ham testni yakunlamoqchimisiz?`;
    } else {
        modalMsg.innerHTML = `Siz barcha <b>20 ta</b> savolga to'liq javob berdingiz! Natijani hisoblash uchun yakunlash tugmasini bosing.`;
    }

    document.getElementById('finishModal').classList.add('active');
}

function closeFinishModal() {
    document.getElementById('finishModal').classList.remove('active');
}

function executeFinishTest() {
    closeFinishModal();
    finishTest();
}

function confirmQuitTest() {
    if (confirm("Testdan chiqmoqchimisiz? Natijangiz saqlanmaydi.")) {
        clearInterval(AppState.timerInterval);
        goHome();
    }
}

// Finish and Show Results
function finishTest() {
    clearInterval(AppState.timerInterval);

    // Calculate score
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    AppState.questions.forEach((q, idx) => {
        const userChoice = AppState.userAnswers[idx];
        if (userChoice === undefined) {
            skippedCount++;
        } else if (userChoice === q.correct) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });

    const percent = Math.round((correctCount / 20) * 100);

    // Set stats
    document.getElementById('scoreCorrectNum').textContent = correctCount;
    document.getElementById('statCorrect').textContent = correctCount;
    document.getElementById('statWrong').textContent = wrongCount;
    document.getElementById('statPercent').textContent = `${percent}%`;
    document.getElementById('statTime').textContent = formatDuration(AppState.timeSpent);

    // Grade and celebration
    const emojiEl = document.getElementById('resultEmoji');
    const titleEl = document.getElementById('resultGradeTitle');
    const subtitleEl = document.getElementById('resultSubtitle');

    if (correctCount >= 18) {
        emojiEl.textContent = "🏆";
        titleEl.textContent = "A'lo Natija! (5 Baho)";
        subtitleEl.textContent = "Qoyilmaqom! Siz mavzuni deyarli mukammal o'zlashtirgansiz.";
        triggerConfetti();
        playSound('fanfare');
    } else if (correctCount >= 14) {
        emojiEl.textContent = "🎖️";
        titleEl.textContent = "Yaxshi Natija! (4 Baho)";
        subtitleEl.textContent = "Juda yaxshi natija! Kichik xatolarni tahlil qilib o'rganing.";
        triggerConfetti(60);
        playSound('fanfare');
    } else if (correctCount >= 10) {
        emojiEl.textContent = "📈";
        titleEl.textContent = "Qoniqarli Natija (3 Baho)";
        subtitleEl.textContent = "Yomon emas, ammo bilimingizni yanada mustahkamlashingiz kerak.";
        playSound('click');
    } else {
        emojiEl.textContent = "💡";
        titleEl.textContent = "Ko'proq Mashq Qiling!";
        subtitleEl.textContent = "Xavotir olmang! Pastdagi izohlarni diqqat bilan o'qib, qayta sinab ko'ring.";
        playSound('wrong');
    }

    // Save to history
    saveToHistory({
        categoryTitle: AppState.currentCategory ? AppState.currentCategory.title : "Test",
        correct: correctCount,
        percent: percent,
        date: new Date().toLocaleDateString('uz-UZ'),
        time: formatDuration(AppState.timeSpent)
    });

    // Populate Review List
    renderReviewList('all');

    // Switch view
    switchView('resultView');
}

// ============================================
// REVIEW LIST & EXPLANATIONS
// ============================================
function renderReviewList(filter = 'all') {
    const container = document.getElementById('reviewContainer');
    if (!container) return;
    container.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    AppState.questions.forEach((q, idx) => {
        const userChoice = AppState.userAnswers[idx];
        const isCorrect = userChoice === q.correct;
        const isSkipped = userChoice === undefined;

        if (filter === 'correct' && !isCorrect) return;
        if (filter === 'wrong' && (isCorrect || isSkipped)) return;

        const card = document.createElement('div');
        let statusClass = isCorrect ? 'correct-item' : (isSkipped ? 'skipped-item' : 'wrong-item');
        card.className = `review-card ${statusClass}`;

        let statusText = isCorrect ? '✅ To\'g\'ri' : (isSkipped ? '⚠️ Belgilanmagan' : '❌ Xato');

        let optionsHtml = '';
        q.options.forEach((optText, optIdx) => {
            let optClass = '';
            let label = letters[optIdx];

            if (optIdx === q.correct) {
                optClass = 'correct-answer';
                label += ' (To\'g\'ri javob)';
            }
            if (optIdx === userChoice && !isCorrect) {
                optClass = 'user-chosen';
                label += ' (Sizning javobingiz)';
            }

            optionsHtml += `
                <div class="rc-opt ${optClass}">
                    <b>${label}:</b> ${optText}
                </div>
            `;
        });

        card.innerHTML = `
            <div class="rc-head">
                <span style="font-weight: 700; color: var(--primary);">Savol #${idx + 1}</span>
                <span style="font-size: 13px; font-weight: 700;">${statusText}</span>
            </div>
            <div class="rc-title">${q.q}</div>
            <div class="rc-options">
                ${optionsHtml}
            </div>
            <div class="rc-expl">
                <b>💡 Izoh:</b> ${q.explanation || "Izoh mavjud emas."}
            </div>
        `;

        container.appendChild(card);
    });
}

function filterReview(type, btn) {
    document.querySelectorAll('.filter-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    playSound('click');
    renderReviewList(type);
}

function restartCurrentTest() {
    if (AppState.currentCategory) {
        startTest(AppState.currentCategory.id);
    } else {
        goHome();
    }
}

// ============================================
// NAVIGATION & VIEW SWITCHING
// ============================================
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function goHome() {
    playSound('click');
    clearInterval(AppState.timerInterval);
    switchView('homeView');
    loadHistory();
}

// ============================================
// LOCAL STORAGE & HISTORY
// ============================================
function saveToHistory(record) {
    try {
        const history = JSON.parse(localStorage.getItem('test_platform_history') || '[]');
        history.unshift(record);
        if (history.length > 8) history.pop();
        localStorage.setItem('test_platform_history', JSON.stringify(history));
    } catch (e) {}
}

function loadHistory() {
    const list = document.getElementById('historyList');
    if (!list) return;

    try {
        const history = JSON.parse(localStorage.getItem('test_platform_history') || '[]');
        if (history.length === 0) {
            list.innerHTML = `<div class="history-empty">Hali test topshirilmadi. Birorta fanni tanlab testni boshlang!</div>`;
            return;
        }

        list.innerHTML = '';
        history.forEach(item => {
            const div = document.createElement('div');
            div.className = 'history-item';
            div.innerHTML = `
                <div>
                    <b>${item.categoryTitle}</b>
                    <span style="color: var(--text-muted); font-size: 12px; margin-left: 8px;">${item.date} (${item.time})</span>
                </div>
                <div style="font-weight: 700; color: ${item.percent >= 70 ? 'var(--success)' : 'var(--warning)'};">
                    ${item.correct} / 20 (${item.percent}%)
                </div>
            `;
            list.appendChild(div);
        });
    } catch (e) {}
}

function clearHistory() {
    localStorage.removeItem('test_platform_history');
    loadHistory();
    showToast("Tarix tozalandi");
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Only trigger during testView
        const testView = document.getElementById('testView');
        if (!testView || !testView.classList.contains('active')) return;

        const key = e.key.toUpperCase();

        if (key === '1' || key === 'A') selectOption(0);
        else if (key === '2' || key === 'B') selectOption(1);
        else if (key === '3' || key === 'C') selectOption(2);
        else if (key === '4' || key === 'D') selectOption(3);
        else if (e.key === 'ArrowRight') nextQuestion();
        else if (e.key === 'ArrowLeft') prevQuestion();
        else if (key === 'F') toggleFlagCurrentQuestion();
    });
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
let toastTimer = null;
function showToast(text, icon = "ℹ️") {
    const toast = document.getElementById('toastMsg');
    const toastText = document.getElementById('toastText');
    const toastIcon = document.getElementById('toastIcon');

    if (!toast) return;
    toastText.textContent = text;
    toastIcon.textContent = icon;

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

// ============================================
// CONFETTI CELEBRATION ENGINE
// ============================================
function triggerConfetti(count = 120) {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#ffffff'];

    for (let i = 0; i < count; i++) {
        particles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 300,
            y: canvas.height / 2 + (Math.random() - 0.5) * 100,
            w: Math.random() * 9 + 4,
            h: Math.random() * 9 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 16,
            vy: (Math.random() - 0.8) * 18 - 3,
            rot: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 12,
            gravity: 0.35,
            opacity: 1
        });
    }

    let animationId;
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.rot += p.rotSpeed;
            p.opacity -= 0.007;

            if (p.opacity > 0 && p.y < canvas.height) {
                alive = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rot * Math.PI) / 180);
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            }
        });

        if (alive) {
            animationId = requestAnimationFrame(render);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationId);
        }
    }

    render();
}
