const teachers=[
    {
    profilPic :' https://as2.ftcdn.net/v2/jpg/04/44/93/21/1000_F_444932136_scHFxRZFB55u8VEKHUeU7s9gW7YS78lo.jpg',
    topic : 'math teacher',
    desc : 'une petite description du poste',
    rate : 45,
    rateUnit : 'cad',
    location : 'winnipeg'
    },
    {
        profilPic :' https://as2.ftcdn.net/v2/jpg/04/44/93/21/1000_F_444932136_scHFxRZFB55u8VEKHUeU7s9gW7YS78lo.jpg',
        topic : 'math teacher',
        desc : 'une petite description du poste',
        rate : 45,
        rateUnit : 'cad',
        location : 'winnipeg'
        },
    {
        profilPic :' https://as2.ftcdn.net/v2/jpg/04/44/93/21/1000_F_444932136_scHFxRZFB55u8VEKHUeU7s9gW7YS78lo.jpg',
        topic : 'math teacher',
        desc : 'une petite description du poste',
        rate : 45,
        rateUnit : 'cad',
        location : 'winnipeg'
     },
]

const renderteacher = (teacher) =>{

    const creationhtml= creationShtml(teacher);
    const cTeacher=document.getElementById('teacher container');
    cTeacher.appendChild('creationhtml');

}


//je vais creer maintenant la fonction qui cree la structure HTML
const creationShtml = (teacher) => {
    const card = document.createElement('div')
    card.className='card';
     //card.Style='width: 18rem;';

    const image = document.createElement('img')
    image.src=teacher.profilPic;

    const cardbody = document.createElement('div')
    cardbody.className ='card-body';

    const title = document.createElement('h5')
    title.className='card-title';
    title.innerHTML=teacher.topic;

    const text = document.createElement('p')
    text.className='card-text';
    text.innerHTML=teacher.desc;

    const list = document.createElement('ul')
    list.className='list-group list-group-flush';
    
    const listli = document.createElement('li')
    listli.className='list-group-item';
    listli.innerHTML='rate : ${teacher.rate}  ${teacher.rateUnit}';

    const location=document.createElement('li')
    location.className='list-group-item';
    location.innerHTML='location : ${teacher.location}';

    location.appendChild('list');
    listli.appendChild('list');
    text.appeddChild('cardbody');
    title.appendChild('cardbody');
    cardbody.appendChild('card');
    image.appendChild('card');
    list.appendChild('card');

    return card;
}


for (let i =0; i < teachers.length; i++) {
    renderteacher(teachers[i])
}

