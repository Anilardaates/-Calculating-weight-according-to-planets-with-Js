const kilo = document.getElementById('kilo')
const gezegen = document.getElementById('gezegen')
const btn = document.getElementById('btn')
const wrapper = document.querySelector('.wrapper')
const img = wrapper.querySelector('img')
const p = wrapper.querySelector('p')


let gezegenler = [
    {
        'adı': 'dünya',
        'yercekimi': 10,
        'resim': './img/img/earth.png'
    },
    {
        'adı': 'jupiter',
        'yercekimi': 25,
        'resim': './img/img/jupiter.png'
    },
    {
        'adı': 'mars',
        'yercekimi': 3.7,
        'resim': './img/img/mars.png'
    },
    {
        'adı': 'mercur',
        'yercekimi': 3.7,
        'resim': './img/img/mercury.png'
    },
    {
        'adı': 'ay',
        'yercekimi': 1.6,
        'resim': './img/img/moon.png'
    },
    {
        'adı': 'neptün',
        'yercekimi': 11.1,
        'resim': './img/img/neptune.png'
    },
    {
        'adı': 'pluto',
        'yercekimi': 0.6,
        'resim': './img/img/pluto.png'
    },
    {
        'adı': 'saturn',
        'yercekimi': 10.4,
        'resim': './img/img/saturn.png'
    },
    {
        'adı': 'uranus',
        'yercekimi': 8.8,
        'resim': './img/img/uranus.png'
    },
    {
        'adı': 'venus',
        'yercekimi': 8.8,
        'resim': './img/img/venus.png'
    },

]

for (let i of gezegenler) {
    const option = document.createElement('option')
    option.textContent = i.adı[0].toLocaleUpperCase() + i.adı.slice(1, i.length)
    option.value = i.adı
    gezegen.append(option)
}
btn.addEventListener('click', function () {
    let value = Number(kilo.value)
    let gezegenValue = gezegen.value
    let kutle = value / 10
    if (!isNaN(value) && gezegenValue != 'Bir Gezegen Seçin') {
        for (let i of gezegenler) {
            if (i.adı == gezegenValue) {
                img.setAttribute('src', i.resim)
                img.className = 'active'
                p.textContent = `${i.adı} gezegeninde ${i.yercekimi * kutle} Kilosun`
            }
        }
    }
})