const questionEl = document.getElementById("Chirpy-question");
const choicesBtns = Array.from(document.getElementsByClassName("choice-text"));
const imageEl = document.querySelector(".gif img");
const resultEl = document.getElementById("result");

let currentQuestionIndex = 0;
let answersCount = [0, 0, 0, 0]; // [A, B, C, D]

const questions = [
    {
        question: "1. Di hari Minggu yang cerah, apa yang suka kamu lakukan?",
        Image: "img/Q1.kc tidur.gif",
        choices: [
            "Beres-beres dong, aku orangnya Produktif!",
            "Nonton TV sambil makan mi",
            "Rebahan, kita balas dendam",
            "Ngedate bareng bubub <3"
        ]
    },
    {
        question: "2. Tiba-tiba ada ledakan keras dari arah luar! Apa yang akan kamu lakukan?",
        Image: "img/Q2. Kc Kaget.gif",
        choices: [
            "Lari Berlindung di Kolong meja",
            "Evakuasi anabu no.1",
            "Berdoa dan Pasrah",
            "Khayalan saja, nggak mungkin terjadi>"
        ]
    },
    {
        question: "3. Sepertinya di luar sudah sepi, apa kau akan keluar?",
        Image: "img/Q3.kc windows.gif",
        choices: [
            "Cek apakah sudah aman",
            "Tidak! lebih baik tetap di dalam",
            "Mencoba hubungi teman-teman",
            "Coba mengintip dari jendela"
        ]
    },
    {
        question: "4. Dunia berubah, apa yang akan kamu lakukan?",
        Image: "img/Q4.nntganti.png",
        choices: [
            "Mengamati sebelum keluar Rumah",
            "Diam dan hubungi orang",
            "santai dan chill aja kali",
            "Panik dan mencoba teriak"
        ]
    },
    {
        question: "5. Saat dunia berubah apa yang ada di Pikiranmua?",
        Image: "img/Q5. Brimagine.gif",
        choices: [
            "Sepertinya aku masuk Isekai",
            "Dunia jadi seram, apakah ini apokalips?",
            "waktunya menjelajahi dunia baru",
            "Sepertinya kita pergi ke masa lalu, apakah kita ada di mesin waktu?"
        ]
    },
    {
        question: "6. Siapa yang akan kalian ajak untuk eksplorasi saat dunia berubah?",
        Image: "img/Q6.Kcwalk.png",
        choices: [
            "Ayang bubub love",
            "Sendirian, aku adalah alpha wolf",
            "Orang yang ada di masa lalu",
            "Orang baru yang penuh semangat"
        ]
    },
    {
        question: "7. Kamu melihat hewan favoritmu di jalan, hewan apa yang kamu lihat?",
        Image: "img/Q7. Brfame.gif",
        choices: [
            "Kucing",
            "kuda",
            "Burung",
            "Kelinci"
        ]
    },
    {
        question: "8. Setelah kejadian ledakan, bagaimana perasaanmu sekarang?",
        Image: "img/Q8.Brshook.gif",
        choices: [
            "Trauma dan ketakutan",
            "Semangat dan ingin bertahan hidup",
            "Masih shok dan bingung",
            "Tertarik dan ingin kembali ke normal"
        ]
    },
    {
        question: "9. Seandainya ada kekuatan super yang bisa kamu miliki di dunia baru, apa yang akan kamu pilih?",
        Image: "img/Q9.Brhero.gif",
        choices: [
            "Kemampuan menyembuhkan",
            "Kekuatan fisik super kuat",
            "Kemampuan terbang",
            "Invisibility (tidak terlihat)"
        ]
    },
    {
        question: "10. Apa tujuan utama yang akan kamu tetapkan untuk dirimu sendiri di dunia yang berubah ini?",
        Image: "img/Q10.nntiganti.png",
        choices: [
            "Bertahan hidup",
            "Mencari tahu penyebab perubahan dunia",
            "Membangun kembali peradaban",
            "Menemukan kedamaian dan kebahagiaan"
        ]
    }
];

function showQuestion() {
    let q = questions[currentQuestionIndex];
    questionEl.innerHTML = q.question;
    imageEl.src = q.Image;
    q.choices.forEach((choice, idx) => {
        choicesBtns[idx].innerHTML = choice;
        choicesBtns[idx].parentElement.style.display = "flex";
    });
}

choicesBtns.forEach((btn, idx) => {
    btn.onclick = function() {
        answersCount[idx]++;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
});

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.querySelectorAll(".choice-container").forEach(el => el.style.display = "none");
    document.querySelector(".gif-image").style.display = "none";
    resultEl.style.display = "block";
    let max = Math.max(...answersCount);
    // Jika ada poin sama, indexOf akan mengambil index terkecil (urutan paling awal)
    let personalityIndex = answersCount.indexOf(max);
    let personality = ["Yang Misterius", "Sang Penjelajah", "Seorang Pemikir filsuf", "Seorang Lovebird"][personalityIndex];
    let descriptions = [
        "Kamu adalah Orang Yang Misterius: Kreatif, suka tantangan dan rasa penasaran tinggi!",
        "Kamu adalah Sang Penjelajah: Santai dan suka menikmati hidup!",
        "Kamu adalah Seorang Pemikir filsuf: Reflektif dan penuh pertimbangan!",
        "Kamu adalah Seorang Lovebird: Romantis dan penuh kasih sayang!"
    ];
    resultEl.innerHTML = `<h2>Hasil Kepribadianmu: ${personality}</h2><p>${descriptions[personalityIndex]}</p>`;
}

// Pastikan resultEl ada di HTML
// <div id="result" style="display:none"></div>

// Mulai quiz
showQuestion();




