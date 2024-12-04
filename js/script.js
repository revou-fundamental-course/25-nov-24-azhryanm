// Ambil elemen-elemen form dan hasil
const bmiForm = document.getElementById("bmi-form");
const bmiResult = document.getElementById("bmi-result");
const bmiCategory = document.getElementById("result-category");
const bmiValue = document.getElementById("bmi-value");
const bmiDescription = document.getElementById("result-description");

// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
  // Konversi tinggi badan dari cm ke meter dan hitung BMI
  return (weight / (height / 100) ** 2).toFixed(1);
}

// Fungsi untuk menentukan kategori BMI
function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return {
      category: "Kekurangan Berat Badan",
      description: "Anda memiliki berat badan di bawah normal.",
    };
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return {
      category: "Normal",
      description: "Anda memiliki berat badan ideal.",
    };
  } else if (bmi >= 25 && bmi <= 29.9) {
    return {
      category: "Kelebihan Berat Badan",
      description: "Anda memiliki berat badan lebih dari normal.",
    };
  } else {
    return {
      category: "Kegemukan (Obesitas)",
      description: "Anda memiliki berat badan berlebih.",
    };
  }
}

// Fungsi untuk menangani form submission
bmiForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah refresh halaman

  // Ambil nilai input dari form
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const gender = document.querySelector('input[name="gender"]:checked');

  // Validasi input
  if (!weight || !height || !gender) {
    alert("Harap isi semua data dengan benar!");
    return;
  }

  // Hitung BMI dan tentukan kategori
  const bmi = calculateBMI(weight, height);
  const { category, description } = getBMICategory(bmi);

  // Tampilkan hasil di halaman
  bmiValue.textContent = bmi;
  bmiCategory.textContent = category;
  bmiDescription.textContent = description;

  // Tampilkan hasil BMI
  bmiResult.style.display = "block";
});

// Fungsi untuk mereset hasil saat tombol reset diklik
bmiForm.addEventListener("reset", function () {
  // Sembunyikan hasil BMI
  bmiResult.style.display = "none";
});
