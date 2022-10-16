Membuat website dan databasenya dengan template clothing store

---

**PERSIAPAN:**

1. Python 3. (link download untuk windows : https://www.python.org/downloads/windows/)
2. Pastikan python berada di path environment variable(saat menginstall python ada pilihan untuk menambahkan python di path environment)
3. Buka cmd lalu jalankan command "pip --version". Jika belum versi terakhir maka jalankan command "py -m pip install --upgrade pip".
4. Lalu install django, ini dapat dilakukan dengan menjalankan command "pip install django"
5. Setelah itu install microsoft sql untuk django dengan menjalankan command "pip install mssql-django==1.0rc1"
6. Jika sudah, maka dapat di check apa sudah terinstall django dengan microsoft sql untuk django dengan menjalankan command "pip list". Jika iya maka django dan mssql akan terdapat di list itu, contohnya seperti gambar dibawah ini:
   ![](/contoh_menjalankan_server1.png)

---

**UNTUK MENJALANKAN SERVER WEBSITE:**

1. Pastikan memiliki python 3.(link download untuk windows : https://www.python.org/downloads/windows/)
2. Pastikan telah menginstall django, jika belum maka buka cmd dan jalankan command : "pip install django". (jika error pastikan python berada di path environment variable)
3. Lalu buka cmd lagi, setelah itu pindah directory ke Django_web. (untuk windows cara simplenya buka file Django_web di file explorer lalu path nya di ubah menjadi cmd dan tinggal tekan enter, liat gambar dibawah untuk contoh)
   ![](/contoh_menjalankan_server2.png)
4. Setelah berada di directory itu maka jalankan command: "python manage.py runserver". maka server akan dijalankan dan bisa buka link yang diberikan di cmd tersebut untuk membuka web.

TEST untuk register json:
{
"email": "siapasih@gmail.com",
"username": "testing",
"password": "okehh",
"password2": "okehh"
}
**Screenshot hasil website:**
   ![](/Screenshot (658).png)
   ![](/Screenshot (659).png)
   ![](/Screenshot (660).png)
   ![](/Screenshot (661).png)
   ![](/Screenshot (662).png)
   ![](/Screenshot (663).png)
   ![](/Screenshot (664).png)
   ![](/Screenshot (665).png)
   ![](/Screenshot (666).png)
   ![](/Screenshot (657).png)
   ![](/Screenshot (668).png)
