/**
 * INFORMATIKA VA AXBOROT TEXNOLOGIYALARI (IT)
 * 20 TALIK MAXSUS TEST PLATFORMASI - SAVOLLAR BAZASI
 * Har bir yo'nalishda aniq 20 tadan professional savollar va batafsil izohlar
 */

const TEST_CATEGORIES = {
    hardware_os: {
        id: "hardware_os",
        title: "Kompyuter Savodxonligi & Qurilmalar",
        icon: "🖥️",
        badge: "Hardware & OS",
        description: "Protsessor, xotira turlari, operatsion tizimlar va kompyuter tuzilishi bo'yicha 20 talik test",
        color: "#0284c7",
        gradient: "linear-gradient(135deg, #0284c7, #2563eb)",
        questions: [
            {
                q: "Kompyuterning barcha mantiqiy va arifmetik amallarini bajaruvchi asosiy 'miyasi' qaysi qurilma?",
                options: ["RAM (Tezkor xotira)", "HDD (Qattiq disk)", "CPU (Markaziy protsessor)", "Videokarta (GPU)"],
                correct: 2,
                explanation: "CPU (Central Processing Unit) - kompyuterdagi barcha hisoblash, arifmetik va mantiqiy amallarni bajaruvchi bosh boshqaruv qurilmasidir."
            },
            {
                q: "Elektr ta'minoti uzilganda undagi ma'lumotlar butunlay o'chib ketadigan xotira turi qaysi?",
                options: ["ROM (Doimiy xotira)", "RAM (Tezkor xotira)", "SSD disk", "Flash xotira"],
                correct: 1,
                explanation: "RAM (Random Access Memory) vaqtinchalik (uchuvchan) xotira bo'lib, elektr quvvatisiz ma'lumotlarni saqlay olmaydi."
            },
            {
                q: "1 Gigabayt (1 GB) necha Megabaytga (MB) teng?",
                options: ["1000 MB", "1024 MB", "512 MB", "2048 MB"],
                correct: 1,
                explanation: "Ikkilik sanoq tizimiga ko'ra axborot birliklari 2 ning darajalari asosida o'lchanadi: 1 GB = 2¹⁰ MB = 1024 MB."
            },
            {
                q: "Kompyuterni yoqish jarayonida apparat vositalarini tekshiruvchi asosiy mikrodastur nima?",
                options: ["BIOS / UEFI", "Windows Defender", "Driver", "Kernel"],
                correct: 0,
                explanation: "BIOS (Basic Input/Output System) yoki UEFI anakartdagi chipda joylashgan bo'lib, kompyuter yoqilganda qurilmalarni dastlabki tekshiruvdan o'tkazadi (POST jarayoni)."
            },
            {
                q: "Quyidagilardan qaysi biri axborotni kiritish (Input) qurilmasi hisoblanadi?",
                options: ["Monitor", "Printer", "Klaviatura", "Karnay (Speaker)"],
                correct: 2,
                explanation: "Klaviatura, sichqoncha va skaner ma'lumotni kiritish qurilmalari; monitor va printer esa chiqarish (output) qurilmalaridir."
            },
            {
                q: "Fayl tizimida '.exe' kengaytmasi qanday turdagi fayllarga tegishli?",
                options: ["Matnli hujjat", "Bajariluvchi (dastur) fayl", "Grafik rasm", "Video fayl"],
                correct: 1,
                explanation: "'.exe' (Executable) kengaytmasi Windows tizimida bevosita ishga tushuvchi dasturlar faylidir."
            },
            {
                q: "Qaysi operatsion tizim ochiq manbali (Open-Source) kodga ega?",
                options: ["Microsoft Windows", "Linux", "Apple macOS", "iOS"],
                correct: 1,
                explanation: "Linux - ochiq manbali va erkin foydalaniladigan yadroli operatsion tizimdir."
            },
            {
                q: "Windows tizimida Vazifalar dispetcherini (Task Manager) tezkor ochish tugmalari qaysi?",
                options: ["Ctrl + Alt + Delete (yoki Ctrl + Shift + Esc)", "Ctrl + F4", "Alt + Tab", "Win + R"],
                correct: 0,
                explanation: "Ctrl + Shift + Esc tugmalari to'g'ridan-to'g'ri Task Managerni ochadi, bu yerda ishlayotgan barcha jarayonlarni nazorat qilish mumkin."
            },
            {
                q: "SSD (Solid State Drive) ning an'anaviy HDD diskdan asosiy ustunligi nimada?",
                options: [
                    "Hajmining cheksiz kattaligida",
                    "Aylanuvchi mexanik qismlari yo'qligi va o'qish/yozish tezligi juda yuqoriligida",
                    "Narxining arzonligida",
                    "Faqat internet orqali ishlashida"
                ],
                correct: 1,
                explanation: "SSD mikrosxemalar (flesh-xotira) asosida ishlaydi, mexanik harakatlanuvchi qismlarga ega emas, shuning uchun HDD dan bir necha barobar tez ishlaydi."
            },
            {
                q: "Axborotning eng kichik o'lchov birligi nima deb ataladi?",
                options: ["Bayt", "Bit", "Kilobayt", "Piksel"],
                correct: 1,
                explanation: "Bit (binary digit) - ikkilik 0 yoki 1 qiymatini qabul qiluvchi eng kichik axborot o'lchov birligidir. 8 bit = 1 bayt."
            },
            {
                q: "Grafik tasvirlar, o'yinlar va 3D modellarni qayta ishlashga ixtisoslashgan protsessor qaysi?",
                options: ["CPU", "GPU (Videokarta protsessori)", "APU", "Chipset"],
                correct: 1,
                explanation: "GPU (Graphics Processing Unit) minglab mayda yadrolarga ega bo'lib, parallel grafik hisob-kitoblar uchun mo'ljallangan."
            },
            {
                q: "Kompyuter ichidagi barcha qurilmalarni (protsessor, xotira, videokarta) birlashtiruvchi asosiy plata nima?",
                options: ["Ona plata (Motherboard)", "Quvvat bloki", "Sovutgich (Cooler)", "Qattiq disk"],
                correct: 0,
                explanation: "Ona plata (Motherboard) kompyuterning barcha qismlarini elektr va shinalar orqali o'zaro bog'lab turuvchi markaziy platadir."
            },
            {
                q: "Windows operatsion tizimida butun ekranni tezkor suratga olish (Screenshot) uchun qaysi klavish ishlatiladi?",
                options: ["Print Screen (PrtScn) yoki Win + Shift + S", "Ctrl + P", "F12", "Alt + Enter"],
                correct: 0,
                explanation: "PrtScn yoki Win + Shift + S ekranni nusxalash va tasvirni saqlash vositasini faollashtiradi."
            },
            {
                q: "Quyidagilardan qaysi biri arxivlangan (siqilgan) fayl kengaytmasi?",
                options: [".zip yoki .rar", ".pdf", ".mp4", ".html"],
                correct: 0,
                explanation: ".zip, .rar va .7z fayllarning hajmini kichraytirib bir arxivga yig'uvchi formatlardir."
            },
            {
                q: "Monitorda tasvirning tiniqligi qaysi parametr bilan o'lchanadi?",
                options: ["Gers (Hz)", "Piksellar soni (Ruxsat / Resolution)", "DPI", "Vatt (W)"],
                correct: 1,
                explanation: "Ekran ruxsati (Resolution) - gorizontal va vertikal bo'yicha piksellar sonini bildiradi (masalan: 1920x1080 Full HD)."
            },
            {
                q: "Kompyuter apparat vositasi (masalan printer) bilan operatsion tizim o'rtasidagi aloqani ta'minlovchi dastur nima deyiladi?",
                options: ["Antivirus", "Drayver (Driver)", "Kompilyator", "Brauzer"],
                correct: 1,
                explanation: "Drayver - bu operatsion tizimga ma'lum bir apparat qurilmasini qanday boshqarishni o'rgatuvchi maxsus xizmat ko'rsatuvchi dastur."
            },
            {
                q: "Faylni butunlay (Savatga / Recycle Binga tushirmasdan) o'chirish uchun qaysi tugmalar birikmasi bosiladi?",
                options: ["Delete", "Shift + Delete", "Ctrl + Delete", "Alt + Delete"],
                correct: 1,
                explanation: "Shift + Delete faylni savatga tashlamasdan to'g'ridan-to'g'ri xotiradan butunlay o'chirib yuboradi."
            },
            {
                q: "Doimiy xotira (ROM) ning vazifasi nima?",
                options: [
                    "Faqat foydalanuvchi yuklagan kinolarni saqlash",
                    "Kompyuter ishlashi uchun zarur bo'lgan zavod mikrodasturlarini o'zgarmas saqlash",
                    "Operativ xotira o'rnini to'liq bosish",
                    "Internetdan fayllarni yuklash"
                ],
                correct: 1,
                explanation: "ROM (Read-Only Memory) - faqat o'qish uchun mo'ljallangan bo'lib, unga zavodda yozilgan boshlang'ich tizim kodlari yoziladi."
            },
            {
                q: "Monitordagi kadrlar yangilanish tezligi (Refresh Rate) qaysi o'lchov birligida ko'rsatiladi?",
                options: ["Megagerts (MHz)", "Gers (Hz)", "Fps", "Bit"],
                correct: 1,
                explanation: "Ekran chastotasi Gers (Hz) da o'lchanadi (masalan: 60Hz, 144Hz, 240Hz bir soniyada necha marta kadr yangilanishini bildiradi)."
            },
            {
                q: "Sichqonchaning o'ng tugmasi bosilganda ochiladigan menyu nima deb ataladi?",
                options: ["Bosh menyu", "Kontekst menyu (Context Menu)", "Fayl menyusi", "Navigatsiya paneli"],
                correct: 1,
                explanation: "Tanlangan ob'ekt ustida sichqonchaning o'ng tugmasi bosilganda unga oid buyruqlar joylashgan 'Kontekst menyu' ochiladi."
            }
        ]
    },
    web_dev: {
        id: "web_dev",
        title: "Web Dasturlash (HTML, CSS, JS)",
        icon: "🌐",
        badge: "Frontend & Web",
        description: "HTML5 teglari, zamonaviy CSS stillari, JavaScript hodisalari va DOM bo'yicha 20 talik test",
        color: "#6366f1",
        gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        questions: [
            {
                q: "HTML da veb-sahifaning asosiy sarlavhasini belgilash uchun qaysi semantik teg ishlatiladi?",
                options: ["<header>", "<h1>", "<title>", "<heading>"],
                correct: 1,
                explanation: "`<h1>` tegi sahifaning eng asosiy va yagona birinchi darajali sarlavhasi (heading) uchun ishlatiladi."
            },
            {
                q: "CSS da elementni sahifaning markaziga (Flexbox orqali) keltirishning to'g'ri usuli qaysi?",
                options: [
                    "display: flex; justify-content: center; align-items: center;",
                    "text-align: center; vertical-align: middle;",
                    "float: center; margin: auto;",
                    "display: block; position: center;"
                ],
                correct: 0,
                explanation: "`display: flex; justify-content: center; align-items: center;` elementni ham gorizontal, ham vertikal o'qda mukammal markazlashtiradi."
            },
            {
                q: "JavaScript da o'zgarmas (qiymatini qayta tayinlab bo'lmaydigan) o'zgaruvchi qaysi kalit so'z bilan e'lon qilinadi?",
                options: ["var", "let", "const", "static"],
                correct: 2,
                explanation: "`const` kalit so'zi bilan e'lon qilingan o'zgaruvchining qiymatini keyinchalik qayta yozib (reassign) bo'lmaydi."
            },
            {
                q: "HTML da tashqi CSS faylini sahifaga ulash qaysi teg orqali amalga oshiriladi?",
                options: ["<script src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css href='style.css'>"],
                correct: 1,
                explanation: "Tashqi CSS uslublar fayli `<head>` tegi ichida `<link rel='stylesheet' href='...'>` orqali ulanadi."
            },
            {
                q: "JavaScript da foydalanuvchining tugmani bosish (click) hodisasini qanday tinglash mumkin?",
                options: [
                    "element.addEventListener('click', handler)",
                    "element.onClick(handler)",
                    "element.attachEvent('pressed')",
                    "element.listen('tap')"
                ],
                correct: 0,
                explanation: "`element.addEventListener('click', callback)` zamonaviy JavaScript da hodisalarni tinglashning standart usulidir."
            },
            {
                q: "CSS Box Model (Quti modeli) qaysi to'rtta qismdan iborat?",
                options: [
                    "Content, Padding, Border, Margin",
                    "Width, Height, Color, Background",
                    "Top, Bottom, Left, Right",
                    "Header, Main, Aside, Footer"
                ],
                correct: 0,
                explanation: "CSS quti modeli: Content (tarkib), Padding (ichki masofa), Border (chegara) va Margin (tashqi masofa) dan iborat."
            },
            {
                q: "HTML5 da foydalanuvchi ma'lumotlarini kiritish uchun qaysi teg ishlatiladi?",
                options: ["<input>", "<formfield>", "<text>", "<label>"],
                correct: 0,
                explanation: "`<input>` tegi matn, parol, son, sana, checkbox kabi har xil turlarda ma'lumot qabul qilish uchun xizmat qiladi."
            },
            {
                q: "JavaScript da massiv (Array) ning oxiriga yangi element qo'shish metodi qaysi?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correct: 0,
                explanation: "`push()` massiv oxiriga element qo'shadi; `pop()` esa oxirgi elementni o'chirib qaytaradi."
            },
            {
                q: "CSS da ID selektori qaysi belgi orqali yoziladi?",
                options: [". (nuqta)", "# (panjara)", "@ (kuchukcha)", "$ (dollar)"],
                correct: 1,
                explanation: "CSS da sinflar (class) `.nuqta` bilan, yagona identifikatorlar (ID) esa `#panjara` belgisi bilan chaqiriladi."
            },
            {
                q: "HTML sahifada yangi satrga (abzatsga) o'tish tegi qaysi?",
                options: ["<br>", "<hr>", "<break>", "<space>"],
                correct: 0,
                explanation: "`<br>` (break line) tegi yopiluvchi tegga ega emas va matnni yangi qatorga tushiradi."
            },
            {
                q: "JavaScript da qat'iy tenglik (qiymat va ma'lumot turini birdek tekshiruvchi) operator qaysi?",
                options: ["==", "===", "!=", "="],
                correct: 1,
                explanation: "`===` qat'iy tenglik operatori bo'lib, o'zgaruvchilarning nafaqat qiymatini, balki ma'lumot turlarini (type) ham taqqoslaydi."
            },
            {
                q: "CSS da elementni ekranning ma'lum bir joyida (aylantirilganda ham) qimirlamaydigan qilib qo'yish uchun qaysi pozitsiya ishlatiladi?",
                options: ["position: absolute;", "position: relative;", "position: fixed;", "position: static;"],
                correct: 2,
                explanation: "`position: fixed;` elementni brauzer oynasiga nisbatan biriktirib qo'yadi va sahifa aylantirilganda ham u o'z o'rnida qoladi."
            },
            {
                q: "HTML da rasmlar yuklanmay qolganda ularning o'rnida chiqadigan tushuntirish matni qaysi atributda beriladi?",
                options: ["title", "alt", "src", "description"],
                correct: 1,
                explanation: "`<img src='...' alt='Rasm tavsifi'>` - `alt` (alternative text) ko'zi ojizlar va rasm yuklanmagan holatlar uchun majburiy atributdir."
            },
            {
                q: "JavaScript da funksiyani kechiktirib (masalan 2 soniyadan so'ng) ishga tushirish uchun qaysi funksiya ishlatiladi?",
                options: ["setInterval()", "setTimeout()", "delay()", "sleep()"],
                correct: 1,
                explanation: "`setTimeout(callback, ms)` belgilangan vaqt (millisekundlarda) o'tgach funksiyani bir marta chaqiradi."
            },
            {
                q: "HTML da tartiblangan (raqamlangan) ro'yxat yaratish uchun qaysi teg ishlatiladi?",
                options: ["<ul>", "<ol>", "<dl>", "<list>"],
                correct: 1,
                explanation: "`<ol>` (Ordered List) raqamli ro'yxat, `<ul>` (Unordered List) esa markerli ro'yxat yaratadi."
            },
            {
                q: "CSS da matnni qalin (bold) qilish uchun qaysi parametr beriladi?",
                options: ["font-style: bold;", "font-weight: bold;", "text-decoration: bold;", "text-transform: uppercase;"],
                correct: 1,
                explanation: "Shriftning qalinligi `font-weight` (masalan: normal, bold, 600, 700) orqali boshqariladi."
            },
            {
                q: "JavaScript brauzer konsoliga xabar chiqarish uchun qaysi buyruq yoziladi?",
                options: ["console.log()", "print()", "system.out.println()", "echo()"],
                correct: 0,
                explanation: "`console.log('Xabar')` ma'lumotlarni dasturchining tekshirish konsoliga (DevTools) chop etadi."
            },
            {
                q: "HTML shaklida (form) parolni yashirin yulduzcha ko'rinishida kiritish uchun qaysi tur beriladi?",
                options: ["<input type='text'>", "<input type='hidden'>", "<input type='password'>", "<input type='secure'>"],
                correct: 2,
                explanation: "`<input type='password'>` kiritilayotgan belgilarni yashirib, doiracha yoki yulduzcha qilib ko'rsatadi."
            },
            {
                q: "CSS da elementning shaffofligini (opacity) belgilash oralig'i qanday?",
                options: ["0 dan 100 gacha", "0.0 dan 1.0 gacha", "1 dan 10 gacha", "-1 dan 1 gacha"],
                correct: 1,
                explanation: "CSS da `opacity: 0;` butunlay ko'rinmas, `opacity: 1;` esa to'liq shaffof bo'lmagan holatni bildiradi (masalan: 0.5 - 50% shaffoflik)."
            },
            {
                q: "DOM qisqartmasining to'liq ma'nosi nima?",
                options: [
                    "Document Object Model",
                    "Data Output Module",
                    "Digital Operating Machine",
                    "Desktop Oriented Mode"
                ],
                correct: 0,
                explanation: "DOM (Document Object Model) - HTML hujjatining brauzer xotirasidagi ob'ektlar shajarasi ko'rinishidagi tuzilmasidir."
            }
        ]
    },
    programming: {
        id: "programming",
        title: "Dasturlash Asoslari & Python",
        icon: "🐍",
        badge: "Algoritmlar & Kod",
        description: "Python sintaksisi, o'zgaruvchilar, sikllar, funksiyalar va mantiqiy algoritmlar bo'yicha 20 talik test",
        color: "#10b981",
        gradient: "linear-gradient(135deg, #10b981, #059669)",
        questions: [
            {
                q: "Python dasturlash tilida ekranga matn chiqarish uchun qaysi funksiya ishlatiladi?",
                options: ["echo()", "console.log()", "print()", "printf()"],
                correct: 2,
                explanation: "Pythonda matn va natijalarni chop etish uchun standart `print()` funksiyasi ishlatiladi."
            },
            {
                q: "Pythonda matnli izoh (kommentariya) qaysi belgi orqali yoziladi?",
                options: ["//", "/* ... */", "#", "<!-- -->"],
                correct: 2,
                explanation: "Pythonda bir qatorli izohlar `#` (panjara) belgisi bilan boshlanadi."
            },
            {
                q: "Quyidagi Python kodining natijasi nima bo'ladi: `x = 7 // 2; print(x)`?",
                options: ["3.5", "3", "4", "1"],
                correct: 1,
                explanation: "Pythonda `//` butun qismini oluvchi bo'lish operatori: 7 // 2 = 3 natijasini beradi."
            },
            {
                q: "Pythonda qoldiqni topish (modul) operatori qaysi?",
                options: ["/", "%", "**", "^"],
                correct: 1,
                explanation: "`%` operatori sonni songa bo'lgandagi qoldiqni hisoblaydi (masalan: 10 % 3 = 1)."
            },
            {
                q: "Pythonda funksiya yaratish qaysi kalit so'z bilan boshlanadi?",
                options: ["function", "def", "func", "create"],
                correct: 1,
                explanation: "Pythonda yangi funksiyalar `def funksiya_nomi():` sintaksisi bilan e'lon qilinadi."
            },
            {
                q: "Pythonda o'zgarmas (immutable) tartiblangan to'plam qaysi?",
                options: ["List (ro'yxat)", "Tuple (kortej)", "Dictionary (lug'at)", "Set (to'plam)"],
                correct: 1,
                explanation: "Tuple (kortej) qavslar `()` ichida e'lon qilinadi va yaratilgandan so'ng uning elementlarini o'zgartirib bo'lmaydi."
            },
            {
                q: "Ushbu kod natijasini toping: `len('Salom Dunyo')`?",
                options: ["10", "11", "12", "9"],
                correct: 1,
                explanation: "`len()` qatorning uzunligini qaytaradi. 'Salom' (5) + bo'shliq (1) + 'Dunyo' (5) = jami 11 ta belgi."
            },
            {
                q: "Dasturlashda cheksiz takrorlanish (Infinite Loop) nimadan kelib chiqadi?",
                options: [
                    "Siklning to'xtash sharti hech qachon 'False' bo'lmaganda",
                    "Kompilyator xato ishlaganda",
                    "Kompyuter xotirasi yetishmaganda",
                    "Funksiya parametr qabul qilmaganda"
                ],
                correct: 0,
                explanation: "Agar `while` siklining sharti doimo `True` bo'lib qolsa va uni to'xtatuvchi `break` bo'lmasa, dastur cheksiz aylanadi."
            },
            {
                q: "Pythonda darajaga ko'tarish amali qaysi operator orqali yoziladi?",
                options: ["^", "**", "^^", "pow*"],
                correct: 1,
                explanation: "Pythonda darajaga ko'tarish `**` bilan yoziladi (masalan: 2 ** 3 = 8)."
            },
            {
                q: "Quyidagilardan qaysi biri to'g'ri o'zgaruvchi nomi bo'la olmaydi?",
                options: ["my_variable", "_num", "2nd_value", "totalScore"],
                correct: 2,
                explanation: "O'zgaruvchi nomlari hech qachon raqam bilan boshlanishi mumkin emas (2nd_value sintaksis xatodir)."
            },
            {
                q: "Pythonda mantiqiy 'VA' (har ikki shart ham to'g'ri bo'lishi talab etiladigan) operator qaysi?",
                options: ["&&", "and", "&", "AND"],
                correct: 1,
                explanation: "Pythonda mantiqiy amallar inglizcha so'zlar bilan yoziladi: `and`, `or`, `not`."
            },
            {
                q: "Ushbu ro'yxatning birinchi elementi qaysi indeksda joylashgan: `mevalar = ['olma', 'anor', 'nok']`?",
                options: ["0", "1", "-1", "boshlang'ich"],
                correct: 0,
                explanation: "Dasturlash tillarida indekslash odatda 0 dan boshlanadi, ya'ni `mevalar[0]` 'olma' bo'ladi."
            },
            {
                q: "Pythonda foydalanuvchidan klaviatura orqali ma'lumot kiritishni so'rash qaysi funksiya bilan bo'ladi?",
                options: ["scan()", "input()", "read()", "prompt()"],
                correct: 1,
                explanation: "`ism = input('Ismingizni kiriting: ')` foydalanuvchi yozgan qiymatni qator (string) sifatida o'zlashtiradi."
            },
            {
                q: "Pythonda bloklar (kod bo'laklari) qanday ajratiladi?",
                options: ["Figurali qavslar { } bilan", "Qator boshidagi bo'shliqlar (Indentations / 4 ta probel) bilan", "Nuqtali vergul ; bilan", "BEGIN va END so'zlari bilan"],
                correct: 1,
                explanation: "Pythonda boshqa tillardagi `{}` qavslar o'rniga surilish (indentation) ishlatiladi, bu kodning toza va chiroyli o'qilishini ta'minlaydi."
            },
            {
                q: "Ushbu shart ifodasining teskarisini beruvchi operator qaysi: `if not x:`?",
                options: ["!", "not", "inv", "opposite"],
                correct: 1,
                explanation: "`not` operatori mantiqiy qiymatni inkor qiladi (True -> False, False -> True)."
            },
            {
                q: "Pythonda kalit va qiymat (key: value) juftliklarini saqlovchi ma'lumot turi nima?",
                options: ["List", "Dictionary (Lug'at)", "Set", "Tuple"],
                correct: 1,
                explanation: "Lug'atlar `{ 'kalit': 'qiymat' }` ko'rinishida belgilanib, kalit orqali tezkor ma'lumot olishga xizmat qiladi."
            },
            {
                q: "Matnni butun songa (integer) aylantirish funksiyasi qaysi?",
                options: ["int()", "str()", "float()", "to_number()"],
                correct: 0,
                explanation: "`int('42')` matn ko'rinishidagi '42' ni 42 butun soniga aylantiradi."
            },
            {
                q: "Algoritmning tarmoqlanuvchi turida qaysi operatorlar qo'llaniladi?",
                options: ["for, while", "if, elif, else", "def, return", "try, except"],
                correct: 1,
                explanation: "Tarmoqlanish bu shartga ko'ra yo'l tanlashdir, u `if`, `elif`, `else` operatorlari orqali amalga oshiriladi."
            },
            {
                q: "Kompilyator (Compiler) va Interpretator (Interpreter) ning asosiy farqi nimada?",
                options: [
                    "Kompilyator butun kodni birdaniga mashina tiliga o'giradi, interpretator esa qatorma-qator bajaradi",
                    "Interpretator faqat o'yinlar uchun kerak",
                    "Kompilyator xatolarni topa olmaydi",
                    "Hech qanday farqi yo'q"
                ],
                correct: 0,
                explanation: "Kompilyator (C++, Rust) dastur kodini oldindan mashina tiliga tarjima qilib '.exe' yaratadi; Interpretator (Python, JS) esa kodni to'g'ridan-to'g'ri o'qib ketma-ket bajaradi."
            },
            {
                q: "Siklni muddatidan oldin butunlay to'xtatib chiqib ketish uchun qaysi buyruq yoziladi?",
                options: ["continue", "break", "pass", "exit"],
                correct: 1,
                explanation: "`break` buyrug'i siklni darhol to'xtatadi; `continue` esa siklning joriy qadamini o'tkazib yuborib keyingi qadamga o'tadi."
            }
        ]
    },
    security_network: {
        id: "security_network",
        title: "Tarmoqlar & Kiberxavfsizlik",
        icon: "🛡️",
        badge: "Networks & Cyber",
        description: "IP-manzillar, protokollar, Wi-Fi, xakerlik xurujlari va axborot xavfsizligi bo'yicha 20 talik test",
        color: "#ec4899",
        gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
        questions: [
            {
                q: "Veb-saytlarga kirishda xavfsiz shifrlangan ma'lumot almashinuvini ta'minlovchi protokol qaysi?",
                options: ["HTTP", "HTTPS", "FTP", "TELNET"],
                correct: 1,
                explanation: "HTTPS (Hypertext Transfer Protocol Secure) SSL/TLS sertifikati orqali foydalanuvchi ma'lumotlarini shifrlaydi."
            },
            {
                q: "IPv4 manzili nechta bitdan iborat?",
                options: ["16 bit", "32 bit", "64 bit", "128 bit"],
                correct: 1,
                explanation: "IPv4 manzili 32 bit (4 ta 8-bitli oktet, masalan: 192.168.1.1) dan iborat. IPv6 esa 128 bitdan iborat."
            },
            {
                q: "Foydalanuvchini aldamchi veb-saytga (masalan soxta bank saytiga) kiritib, uning parollarini o'g'irlash usuli nima deb ataladi?",
                options: ["Fishing (Phishing)", "DDoS", "Spam", "Troya oti"],
                correct: 0,
                explanation: "Fishing (Phishing) - kiberfiribgarlik turi bo'lib, rasmiy xizmatlar nomidan soxta xat yoki havolalar orqali shaxsiy ma'lumotlarni o'g'irlashdir."
            },
            {
                q: "DNS (Domain Name System) ning asosiy vazifasi nima?",
                options: [
                    "Sayt domen nomlarini (masalan google.com) raqamli IP-manzilga aylantirish",
                    "Kompyuterni viruslardan tozalash",
                    "Internet tezligini oshirish",
                    "Elektron xatlarni saqlash"
                ],
                correct: 0,
                explanation: "DNS - bu internetning 'telefon kitobi' bo'lib, inson tushunadigan 'kun.uz' kabi nomlarni server tushunadigan '185.196....' IP-manziliga bog'laydi."
            },
            {
                q: "Tarmoqlararo ma'lumot paketlarini manzilga to'g'ri yo'naltiruvchi maxsus qurilma qaysi?",
                options: ["Ruter (Router / Marshrutizator)", "Xab (Hub)", "Kabel", "Printer"],
                correct: 0,
                explanation: "Ruter (Router) turli tarmoqlar (masalan uy tarmog'i va Internet) o'rtasida ma'lumot paketlarini eng maqbul yo'l bilan uzatadi."
            },
            {
                q: "Parolning xavfsiz va kuchli bo'lishi uchun qaysi qoida to'g'ri?",
                options: [
                    "Kamida 8-12 ta belgi, katta-kichik harflar, raqamlar va maxsus belgilar (@, #, $) aralashmasi",
                    "Tug'ilgan sana va ismni qo'yish",
                    "12345678 ketma-ketligini kiritish",
                    "Faqat bitta so'zdan iborat bo'lishi"
                ],
                correct: 0,
                explanation: "Kuchli parollar turli registrli harflar, raqamlar va ramzlar birikmasidan iborat bo'lishi lozim."
            },
            {
                q: "DDoS (Distributed Denial of Service) hujumining maqsadi nima?",
                options: [
                    "Serverga birdaniga millionlab soxta so'rovlar yuborib, uning ishdan chiqishiga va to'xtab qolishiga olib kelish",
                    "Foydalanuvchining fayllarini shifrlab pul talab qilish",
                    "Faqat monitorni o'chirib qo'yish",
                    "Internet kabellarini uzish"
                ],
                correct: 0,
                explanation: "DDoS xuruji server yoki tarmoq resurslariga haddan tashqari ko'p soxta so'rovlar yuborish orqali uning odatiy foydalanuvchilarga xizmat ko'rsata olmasligiga qaratiladi."
            },
            {
                q: "Mahalliy (kichik hududdagi bino yoki xona ichidagi) kompyuter tarmog'i qanday ataladi?",
                options: ["LAN (Local Area Network)", "WAN (Wide Area Network)", "MAN", "PAN"],
                correct: 0,
                explanation: "LAN - bir xonadon, ofis yoki maktab binosi doirasida qurilgan mahalliy kompyuter tarmog'idir."
            },
            {
                q: "Ikki bosqichli autentifikatsiya (2FA) nima uchun kerak?",
                options: [
                    "Parol o'g'irlangan taqdirda ham, telefon orqali ikkinchi tasdiq kodi talab qilinib, hisobni himoya qilish uchun",
                    "Kompyuter tezroq ishlashi uchun",
                    "Fayllarni siqish uchun",
                    "Internet narxini tejash uchun"
                ],
                correct: 0,
                explanation: "2FA (Two-Factor Authentication) akkauntga kirishda paroldan tashqari SMS yoki Authenticator ilovasi kodini so'rash orqali xavfsizlikni 2 barobar oshiradi."
            },
            {
                q: "Wi-Fi xavfsizligida bugungi kundagi eng ishonchli shifrlash standarti qaysi?",
                options: ["WEP", "WPA2 / WPA3", "Open Wi-Fi", "WPS"],
                correct: 1,
                explanation: "Eski WEP standarti osongina buziladi. Hozirda WPA2 va eng yangi WPA3 shifrlash protokollari xavfsiz hisoblanadi."
            },
            {
                q: "Tarmoq xavfsizlik devori (Firewall) ning vazifasi nima?",
                options: [
                    "Kiruvchi va chiquvchi tarmoq trafigini qoidalar asosida filtrlab, shubhali ulanishlarni to'sish",
                    "Kompyuter temperaturasini sovutish",
                    "Faqat yangi o'yinlarni yuklash",
                    "Klaviatura tugmalarini tozalash"
                ],
                correct: 0,
                explanation: "Firewall (Brandmauer) - ruxsatsiz kirishlar, xakerlik skanerlari va shubhali paketlarni tarmoqqa kiritmaydigan devordir."
            },
            {
                q: "Zararli dasturlardan biri bo'lgan 'Ransomware' (tovlamachi virus) nima qiladi?",
                options: [
                    "Qattiq diskdagi fayllarni kuchli shifrlab qo'yadi va ularni ochish uchun pul (odatda kriptovalyuta) talab qiladi",
                    "Faqat brauzer sahifasini o'zgartiradi",
                    "Internet kabelini sekinlashtiradi",
                    "Musiqa chalib turadi"
                ],
                correct: 0,
                explanation: "Ransomware - qimmatli hujjatlarni shifrlab qulflab qo'yuvchi va ularni qayta tiklash uchun to'lov talab qiluvchi xavfli virus turi."
            },
            {
                q: "Quyidagilardan qaysi biri mahalliy IP-manzil (Local / Private IP) ga misol bo'ladi?",
                options: ["192.168.1.1", "8.8.8.8", "1.1.1.1", "142.250.180.206"],
                correct: 0,
                explanation: "`192.168.x.x` va `10.x.x.x` diapazonlari ichki mahalliy tarmoqlar (LAN) uchun ajratilgan xususiy IP-manzillardir."
            },
            {
                q: "VPN (Virtual Private Network) dan foydalanishning asosiy maqsadi nima?",
                options: [
                    "Foydalanuvchi trafigini shifrlash va real IP-manzilni yashirib, maxfiy xavfsiz ulanish hosil qilish",
                    "Kompyuterni yangi fleshkaga nusxalash",
                    "Fayllarni video formatga o'tkazish",
                    "Monitor yorug'ligini oshirish"
                ],
                correct: 0,
                explanation: "VPN orqali sizning internet trafigingiz himoyalangan shifrlangan tunnel orqali o'tadi va internetdagi maxfiyligingiz ta'minlanadi."
            },
            {
                q: "Elektron pochta (E-mail) orqali xat yuborishda qaysi protokol ishlatiladi?",
                options: ["SMTP", "POP3", "IMAP", "HTTP"],
                correct: 0,
                explanation: "SMTP (Simple Mail Transfer Protocol) elektron xatlarni jo'natish protokoli; POP3 va IMAP esa kelgan xatlarni qabul qilish protokollaridir."
            },
            {
                q: "Kompyuter tarmoq kartasining butun dunyo bo'yicha yagona bo'lgan jismoniy manzili nima deyiladi?",
                options: ["MAC-manzil (Media Access Control)", "IP-manzil", "Port raqami", "Domen nomi"],
                correct: 0,
                explanation: "MAC-manzil - bu zavodda tarmoq chipiga yozilgan 48-bitli o'zgarmas jismoniy apparat manzilidir (masalan: 00:1A:2B:3C:4D:5E)."
            },
            {
                q: "Brauzerda 'Incognito' (Maxfiy oyna) rejimining vazifasi nima?",
                options: [
                    "Oyna yopilgandan so'ng ko'rilgan saytlar tarixi (history) va cookie fayllarini saqlamaslik",
                    "Internetni mutlaqo tekin qilish",
                    "Kompyuterni viruslardan 100% himoya qilish",
                    "Barcha bloklangan saytlarni avtomatik ochish"
                ],
                correct: 0,
                explanation: "Inkognito rejimi faqat qurilmaning o'zida qidiruv tarixi va kesh fayllari qolmasligini ta'minlaydi."
            },
            {
                q: "Fayllarni serverga yuklash va serverdan ko'chirib olish uchun qaysi tarmoq protokoli xizmat qiladi?",
                options: ["FTP (File Transfer Protocol)", "DNS", "DHCP", "ICMP"],
                correct: 0,
                explanation: "FTP (File Transfer Protocol) fayllarni masofaviy serverlar bilan tezkor va qulay almashish protokol hisoblanadi."
            },
            {
                q: "Xakerlikda 'Social Engineering' (Ijtimoiy muhandislik) nima?",
                options: [
                    "Texnik zaifliklar o'rniga, insoniy ishonuvchanlik va psixologiyadan foydalanib maxfiy ma'lumotlarni aldov yo'li bilan qo'lga kiritish",
                    "Ijtimoiy tarmoqlar uchun yangi dizayn yaratish",
                    "Robototexnika sohasidagi muhandislik",
                    "Faqat yangi telefonlar ishlab chiqarish"
                ],
                correct: 0,
                explanation: "Ijtimoiy muhandislik - odamlarni aldash, ularning qo'rquv yoki qiziqishidan foydalanib parol va kodlarni olish san'atidir."
            },
            {
                q: "Kompyuterga o'zini foydali dastur (masalan o'yin yoki drayver) qilib ko'rsatib kirib oluvchi zararli dastur turi qaysi?",
                options: ["Troya oti (Trojan)", "Chuvalchang (Worm)", "Keylogger", "Adware"],
                correct: 0,
                explanation: "Troya oti (Trojan) qadimiy afsonadagi kabi o'zini bezaror dastur niqobi ostida taqdim etib, tizimga yashirin kirish yo'lini ochadi."
            }
        ]
    },
    office_database: {
        id: "office_database",
        title: "Ofis Dasturlari & Ma'lumotlar Bazasi (SQL)",
        icon: "📊",
        badge: "Excel, Word & SQL",
        description: "Excel formulalari, jadvallar, Word vositalari va Relyatsion ma'lumotlar bazasi (SQL) bo'yicha 20 talik test",
        color: "#d97706",
        gradient: "linear-gradient(135deg, #d97706, #f59e0b)",
        questions: [
            {
                q: "Microsoft Excel dasturida barcha formulalar qaysi belgi bilan boshlanadi?",
                options: ["= (tenglik)", "+ (qo'shuv)", "@ (kuchukcha)", "$ (dollar)"],
                correct: 0,
                explanation: "Excelda har qanday hisoblash yoki funksiya kiritishdan oldin `=` belgisi qo'yilishi shart."
            },
            {
                q: "Excelda kataklar oralig'idagi sonlarning o'rtacha arifmetik qiymatini topuvchi funksiya qaysi?",
                options: ["SUM()", "AVERAGE()", "COUNT()", "MAX()"],
                correct: 1,
                explanation: "`AVERAGE()` (o'zbekcha / ruscha: СРЗНАЧ) tanlangan kataklardagi sonlar yig'indisini ularning soniga bo'lib o'rtachasini topadi."
            },
            {
                q: "SQL (Structured Query Language) tili nima uchun mo'ljallangan?",
                options: [
                    "Relyatsion ma'lumotlar bazalarini boshqarish va ulardan ma'lumotlarni olish",
                    "Kompyuter o'yinlarini yaratish",
                    "Faqat rasmlarni tahrirlash",
                    "Matn terish"
                ],
                correct: 0,
                explanation: "SQL (Structured Query Language) - jadvalli ma'lumotlar bazasiga so'rovlar yozish, ma'lumot qo'shish va o'zgartirish tili."
            },
            {
                q: "SQL da jadvaldan ma'lumotlarni tanlab olish uchun qaysi asosiy buyruq ishlatiladi?",
                options: ["SELECT", "GET", "EXTRACT", "OPEN"],
                correct: 0,
                explanation: "`SELECT ustun_nomi FROM jadval_nomi;` SQL dagi eng ko'p ishlatiladigan tanlash buyrug'idir."
            },
            {
                q: "Microsoft Word dasturida barcha matnni birdaniga belgilash (Select All) klavishlar birikmasi qaysi?",
                options: ["Ctrl + A", "Ctrl + B", "Ctrl + S", "Ctrl + C"],
                correct: 0,
                explanation: "Ctrl + A hujjtdagi butun matn va ob'ektlarni birdaniga belgilab olish uchun xizmat qiladi."
            },
            {
                q: "Excelda katak manzilini mahkamlash (absolyut manzil, nusxalanganda o'zgarmaydigan qilish) uchun qaysi belgi qo'yiladi?",
                options: ["$", "#", "&", "%"],
                correct: 0,
                explanation: "Masalan: `$A$1` ko'rinishida yozilgan manzil formulani boshqa kataklarga nusxalaganda ham qimirlamay o'zgarmas qoladi."
            },
            {
                q: "SQL da jadvalga yangi qator (yozuv) qo'shish buyrug'i qaysi?",
                options: ["INSERT INTO", "ADD NEW", "UPDATE", "CREATE ROW"],
                correct: 0,
                explanation: "`INSERT INTO jadval (ustun1, ustun2) VALUES (qiymat1, qiymat2);` yangi ma'lumot qo'shadi."
            },
            {
                q: "Excelda berilgan shartga ko'ra qiymatlarni hisoblovchi mantiqiy funksiya qaysi?",
                options: ["IF()", "FOR()", "WHILE()", "CHECK()"],
                correct: 0,
                explanation: "`IF(shart; rost_bo'lsa; yolg'on_bo'lsa)` funksiyasi shartga binoan turli natijalarni qaytaradi."
            },
            {
                q: "Relyatsion ma'lumotlar bazasida har bir qatorni yagona tarzda tanib olish uchun nima ishlatiladi?",
                options: ["Primary Key (Birlamchi kalit)", "Foreign Key", "Index", "Null"],
                correct: 0,
                explanation: "Primary Key (Birlamchi kalit) - jadvalda har bir yozuvni bir-biridan farqlovchi takrorlanmas qiymatdir (masalan: ID raqami)."
            },
            {
                q: "Word hujjatida yangi sahifaga majburiy o'tish (Page Break) uchun qaysi tugmalar birikmasi bosiladi?",
                options: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Tab + Enter"],
                correct: 0,
                explanation: "Ctrl + Enter bosilganda kursor darhol yangi toza sahifaning boshiga o'tadi."
            },
            {
                q: "Excelda kataklar oralig'idagi eng katta sonni topuvchi funksiya qaysi?",
                options: ["MAX()", "MIN()", "LARGE_ALL()", "TOP()"],
                correct: 0,
                explanation: "`MAX(A1:A20)` belgilangan hududdagi sonlar ichidan eng kattasini qaytaradi."
            },
            {
                q: "SQL da ma'lumotlarni filtrlash (shart bo'yicha saralash) uchun qaysi kalit so'z ishlatiladi?",
                options: ["WHERE", "ORDER", "FILTER", "HAVING ONLY"],
                correct: 0,
                explanation: "`SELECT * FROM foydalanuvchilar WHERE yosh > 18;` faqat yoshi 18 dan kattalarni olib beradi."
            },
            {
                q: "PowerPoint dasturida yangi slayd qo'shish tezkor klavishi qaysi?",
                options: ["Ctrl + M", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
                correct: 0,
                explanation: "PowerPointda Ctrl + M yangi slayd qo'shadi; Ctrl + N esa butunlay yangi taqdimot fayli ochadi."
            },
            {
                q: "Excelda katakdagi ma'lumot `###` ko'rinishida chiqib qolsa, bu nimani bildiradi?",
                options: [
                    "Katak kengligi undagi sonni ko'rsatish uchun yetarli emas (ustunni kengaytirish kerak)",
                    "Katta xato yuz berdi va fayl buzildi",
                    "Katakdagi matn o'chib ketgan",
                    "Formula noto'g'ri yozilgan"
                ],
                correct: 0,
                explanation: "Son ustun kengligiga sig'magan taqdirda Excel `###` belgilarini chiqaradi. Ustun chegarasini surib kengaytirilsa son ko'rinadi."
            },
            {
                q: "SQL da mavjud yozuvlarni o'zgartirish (yangilash) buyrug'i qaysi?",
                options: ["UPDATE", "MODIFY", "CHANGE", "REPLACE"],
                correct: 0,
                explanation: "`UPDATE jadval SET narx = 500 WHERE id = 1;` mavjud ma'lumotni yangilaydi."
            },
            {
                q: "Excelda ikki yoki undan ortiq kataklarni bitta umumiy katakka birlashtirish vositasi nima deyiladi?",
                options: ["Merge & Center (Birlashtirish va markazda joylashtirish)", "Wrap Text", "AutoFit", "Group"],
                correct: 0,
                explanation: "'Merge & Center' bir nechta kataklarni birlashtirib, sarlavhalar hosil qilish uchun xizmat qiladi."
            },
            {
                q: "Wordda hujjatning yuqori yoki pastki qismida har bir sahifada takrorlanuvchi ma'lumotlar nima deyiladi?",
                options: ["Kolontitul (Header & Footer)", "Snoska", "Giperhavola", "Bookmark"],
                correct: 0,
                explanation: "Kolontitul - sahifaning yuqori (Header) va pastki (Footer) maydoni bo'lib, odatda sahifa raqami, kitob nomi va sana yoziladi."
            },
            {
                q: "SQL da jadvaldagi ma'lumotlarni o'sish yoki kamayish tartibida saralash qaysi operator bilan bajariladi?",
                options: ["ORDER BY", "SORT BY", "GROUP BY", "ARRANGE"],
                correct: 0,
                explanation: "`ORDER BY narx ASC` (o'sish tartibida) yoki `DESC` (kamayish tartibida) saralaydi."
            },
            {
                q: "Excelda vertikal qidiruv funksiyasi bo'lib, jadvaldan mos qiymatni topib beruvchi mashhur funksiya qaysi?",
                options: ["VLOOKUP()", "SEARCH()", "FIND()", "INDEX_MATCH()"],
                correct: 0,
                explanation: "`VLOOKUP()` (Vertical Lookup) jadvalning birinchi ustunidan kalit so'zni qidirib, unga mos qatordagi boshqa ustun qiymatini olib beradi."
            },
            {
                q: "Ma'lumotlar bazasini boshqarish tizimlariga (MBBT / DBMS) qaysi javob mos keladi?",
                options: ["MySQL, PostgreSQL, Oracle, SQLite", "Windows, Linux, macOS", "Chrome, Firefox, Opera", "Photoshop, CorelDraw"],
                correct: 0,
                explanation: "MySQL, PostgreSQL, Oracle va SQLite dunyodagi eng mashhur ma'lumotlar bazasini boshqarish tizimlaridir."
            }
        ]
    },
    it_mega_mix: {
        id: "it_mega_mix",
        title: "20 Talik Bosh IT Imtihoni (Universal)",
        icon: "⚡",
        badge: "Katta IT Sinov",
        description: "Barcha IT yo'nalishlaridan (Hardware, Web, Python, Kiberxavfsizlik, SQL) eng sara 20 ta savol",
        color: "#f59e0b",
        gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
        questions: [] // Engine dynamically selects 20 questions across all IT modules!
    }
};
