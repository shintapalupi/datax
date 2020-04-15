/*
	pop-area-bma.js
	Population and area of Bandung metropolitan area (BMA)
	
	Tatang Suheri (source of data)
	Sparisoma Viridi (JS form)
	
	20200415
	2015 Finish this mixed array.
	2037 Upload to Github in datax/spatial folder.
*/

// Regency/City, District, Population, Area (km)
var BMA = [
["Kota Bandung", "Bandung Kulon", 145152, 7.18],
["Kota Bandung", "Babakan Ciparay", 149864, 7.13],
["Kota Bandung", "Bojongloa Kaler", 123004, 3.79],
["Kota Bandung", "Bojongloa Kidul", 88202, 4.34],
["Kota Bandung", "Astanaanyar", 70830, 2.67],
["Kota Bandung", "Regol", 83826, 4.61],
["Kota Bandung", "Lengkong", 73476, 5.82],
["Kota Bandung", "Bandung Kidul", 61170, 5.45],
["Kota Bandung", "Buah Batu", 97195, 10.58],
["Kota Bandung", "Rancasari", 77308, 4.92],
["Kota Bandung", "Gedebage", 37749, 6.32],
["Kota Bandung", "Cibiru", 72209, 6.37],
["Kota Bandung", "Panyileukan", 41178, 8.46],
["Kota Bandung", "Ujungberung", 77316, 5.97],
["Kota Bandung", "Cinambo", 26605, 4.2],
["Kota Bandung", "Arcamanik", 70132, 6.37],
["Kota Bandung", "Antapani", 76396, 4.94],
["Kota Bandung", "Mandalajati", 64986, 4.74],
["Kota Bandung", "Kiaracondong", 133974, 5.58],
["Kota Bandung", "Batununggal", 122915, 4.75],
["Kota Bandung", "Sumur Bandung", 37742, 3.44],
["Kota Bandung", "Andir", 99532, 4.02],
["Kota Bandung", "Cicendo", 101737, 7.85],
["Kota Bandung", "Bandung Wetan", 32778, 3.4],
["Kota Bandung", "Cibeunying Kidul", 110032, 4],
["Kota Bandung", "Cibeunying Kaler", 73023, 4.44],
["Kota Bandung", "Coblong", 133841, 7.26],
["Kota Bandung", "Sukajadi", 110351, 5.15],
["Kota Bandung", "Sukasari", 83851, 6.28],
["Kota Bandung", "Cidadap", 60275, 8.28],

["Kota Cimahi", "Cimahi Selatan",	277686,	16.35],
["Kota Cimahi", "Cimahi Tengah",	153737,	10.8],
["Kota Cimahi", "Cimahi Utara",	175276,	13.58],

["Kabupaten Bandung Barat", "Rongga", 60840, 117.06],
["Kabupaten Bandung Barat", "Gununghulu", 83090, 166.53],
["Kabupaten Bandung Barat", "Sindangkerta", 75673, 108.42],
["Kabupaten Bandung Barat", "Cililin", 98664, 78.17],
["Kabupaten Bandung Barat", "Cihampelas", 125921, 45.58],
["Kabupaten Bandung Barat", "Cipongkor", 98850, 82.77],
["Kabupaten Bandung Barat", "Batujajar", 106266, 32.32],
["Kabupaten Bandung Barat", "Saguling", 33583, 49.71],
["Kabupaten Bandung Barat", "Cipatat", 144462, 120.16],
["Kabupaten Bandung Barat", "Padalarang", 193783, 52.93],
["Kabupaten Bandung Barat", "Ngamprah", 191743, 32.06],
["Kabupaten Bandung Barat", "Parongpong", 122398, 42.24],
["Kabupaten Bandung Barat", "Lembang", 213251, 95.64],
["Kabupaten Bandung Barat", "Cisarua", 81235, 54.28],
["Kabupaten Bandung Barat", "Cikalongwaten", 134450, 115.8],
["Kabupaten Bandung Barat", "Cipeundeuy", 89950, 85.63],

["Kabupaten Bandung", "Ciwidey", 80467, 48.78],
["Kabupaten Bandung", "Rancabali", 52565, 148],
["Kabupaten Bandung", "Pasirjambu", 88425, 204.01],
["Kabupaten Bandung", "Cimaung", 81675, 59.76],
["Kabupaten Bandung", "Pangalengan", 153228, 218.59],
["Kabupaten Bandung", "Kertasari", 72248, 151.08],
["Kabupaten Bandung", "Pacet", 112690, 94.85],
["Kabupaten Bandung", "Ibun", 84823, 56.52],
["Kabupaten Bandung", "Paseh", 134497, 47.9],
["Kabupaten Bandung", "Cikancung", 94373, 38.62],
["Kabupaten Bandung", "Cicalengka", 122867, 43.1],
["Kabupaten Bandung", "Nagreg", 54528, 41.91],
["Kabupaten Bandung", "Rancaekek", 188397, 45.23],
["Kabupaten Bandung", "Majalaya", 169191, 24.33],
["Kabupaten Bandung", "Solokanjeruk", 86756, 24.06],
["Kabupaten Bandung", "Ciparay", 169438, 53.43],
["Kabupaten Bandung", "Baleendah", 266685, 41.42],
["Kabupaten Bandung", "Arjasari", 102243, 63.28],
["Kabupaten Bandung", "Banjaran", 129184, 38.72],
["Kabupaten Bandung", "Cangkuang", 77254, 23.84],
["Kabupaten Bandung", "Pameungpeuk", 79276, 15.4],
["Kabupaten Bandung", "Katapang", 130505, 20.87],
["Kabupaten Bandung", "Soreang", 119605, 19.98],
["Kabupaten Bandung", "Kutawaringin", 102519, 46.44],
["Kabupaten Bandung", "Margaasih", 157162, 18.23],
["Kabupaten Bandung", "Margahayu", 133664, 10.4],
["Kabupaten Bandung", "Dayeuhkolot", 124296, 11.01],
["Kabupaten Bandung", "Bojongsoang", 126538, 28.04],
["Kabupaten Bandung", "Cileunyi", 203463, 29.86],
["Kabupaten Bandung", "Cilengkrang", 54569, 36.65],
["Kabupaten Bandung", "Cimenyan", 119863, 48.04],

];

