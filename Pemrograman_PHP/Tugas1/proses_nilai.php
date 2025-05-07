<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $nilai = $_POST["nilai"];
    
    if ($nilai > 70) {
        $status = "Lulus";
        $warna = "green";
    } else {
        $status = "Remedial";
        $warna = "red";
    }
} else {
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Nilai Ujian</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            text-align: center;
            font-weight: 800;
        }
        .hasil {
            background-color:rgba(255, 237, 250, 0.84);
            border: 1px solid rgb(167, 81, 81);
            padding: 20px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .status {
            font-weight: bold;
            font-size: 1.2em;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid rgb(167, 81, 81);
            border-top: 1px solid rgb(167, 81, 81);
        }
        th {
            background-color: #ffc9ef;
            border-bottom: 2px solid rgb(167, 81, 81);
        }
        .kembali {
            margin-top: 20px;
        }
        .kembali a {
            background-color: #ffc9ef;
            color: black;
            font-weight: bold;
            padding: 10px 15px;
            text-decoration: none;
            border-radius: 4px;
            display: inline-block;
        }
        .kembali a:hover {
            background-color: #ff62d0;
        }
    </style>
</head>
<body>
    <h1>Hasil Nilai Ujian</h1>
    
    <div class="hasil">
        <table>
            <tr>
                <th>Nama</th>
                <td><?php echo htmlspecialchars($nama); ?></td>
            </tr>
            <tr>
                <th>Email</th>
                <td><?php echo htmlspecialchars($email); ?></td>
            </tr>
            <tr>
                <th>Nilai Ujian</th>
                <td><?php echo htmlspecialchars($nilai); ?></td>
            </tr>
            <tr>
                <th>Status</th>
                <td class="status" style="color: <?php echo $warna; ?>;">
                    <?php echo $status; ?>
                </td>
            </tr>
        </table>
        
        <?php
        if ($status == "Lulus") {
            echo "<p>Selamat! kamu telah lulus ujian dengan nilai " . htmlspecialchars($nilai) . "🤩</p>";
        } else {
            echo "<p>Maaf, kamu perlu mengikuti remedial karena nilai kamu " . htmlspecialchars($nilai) . " (kurang dari 70)😢</p>";
        }
        ?>
    </div>
    
    <div class="kembali">
        <a href="index.html">Kembali</a>
    </div>
</body>
</html>