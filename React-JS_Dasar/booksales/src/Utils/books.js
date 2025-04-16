const books = [
    {
        id: 1, 
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        description: "Panduan membentuk kebiasaan kecil untuk hasil luar biasa.",
        image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    },
    {
        id: 2,
        title: "One of us is Lying - Satu Pembohong",
        author: "Karen M. McManus",
        year: 2017,
        description: "Lima murid memasuki ruang detensi, dan keempatnya dicurigai karena salah satunya tewas.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHROahuH4Pj3DJ3vOJFApJk1yXG6re2c5EaA&s"
    },
    {
        id: 3,
        title: "Serikat Anjing Mandiri",
        author: "Mawan Belgia",
        year: 2024,
        description: "Kita berbeda dengan anjing-anjing di luar sana, mereka tidak memiliki wadah yang bisa menyatukan mereka.",
        image: "https://elexmedia.s3.amazonaws.com/product/9786230057212.jpg"
    },
    {
        id: 4,
        title: "Negeri Para Bedebah",
        author: "Tere Liye",
        year: 2012,
        description: "Di negeri para bedebah, kisah fiksi kalah seru dibanding kisah nyata.",
        image: "https://cdn.gramedia.com/uploads/picture_meta/2023/4/10/hwwjhrajpbdc4ctutxpzxa.jpg"
    },
    {
        id: 5,
        title: "Surat Kecil Untuk Ayah",
        author: "Boy Candra",
        year: 2023,
        description: "Ayah, di rentang waktu yang mengurangi usia, aku takut kekecewaan masih saja berdiam di dadamu.",
        image: "https://bukune.com/wp-content/uploads/2016/08/surat-kecil-utk-ayah.jpg"
    },
    {
        id: 6,
        title: "Apa yang Kita Pikirkan Ketika Kita Sendirian",
        author: "Desi Anwar ; alih bahasa, Sofia Mansoor",
        year: 2020,
        description: "Apabila dinikmati secara utuh, kesendirian menjadi seni yang mencerahkan sekaligus menyembuhkan.",
        image: "https://ebooks.gramedia.com/ebook-covers/60305/image_highres/BLK_AYKPKKS2020375733.jpg"
    },
    {
        id: 7,
        title: "Yes to Life",
        author: "Viktor E. Frankl",
        year: 2020,
        description: "Karya yang membuat kita melihat kembali harapan meski di saat-saat paling gelap dalam kehidupan.",
        image: "https://inc.mizanstore.com/aassets/img/com_cart/produk/yes-to-life-pre-order.jpg"
    },
    {
        id: 8,
        title: "Aku Berani Tidur Sendiri",
        author: "Ali Muakhir",
        year: 2022,
        description: "Buku anak Indonesia yang membantu mengatasi rasa takut.",
        image: "https://store.tigaserangkai.com/wp-content/uploads/2022/10/16-COV-AAM-Tidur-Sendiri-19x24-eisbn.jpg"
    },
    {
        id: 9,
        title: "Negeri 5 Menara",
        author: "Ahmad Fuadi",
        year: 2009,
        description: "Kisah inspiratif pemuda pesantren yang menggapai mimpi besar.",
        image: "https://cdn.gramedia.com/uploads/items/9789792248616_negeri-5-menara-_cu-cover-baru_.jpg"
    }
]

export default books;