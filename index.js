import { appendFile, readFile, unlink, writeFile } from "fs";

// Dosyanın yazımı
writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000,', 'utf8', (err) => {
    if (err) throw err;
    console.log('dosya başarıyla yazıldı.');
});

// Verinin okunması
readFile('employees.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('dosya okundu.');
    console.log(data);
});

// Veri eklenmesi
appendFile('employees.json', '\n"name": "Employee 2 Name", "salary": 2500}', (err) => {
    if (err) throw err;
    console.log('veri eklendi.');
});

// Dosyanın silinmesi
unlink('employees.json', (err) => {
    if (err) throw err;
    console.log('dosya silindi.');
});

