//First-stage (image-slide)

const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const image4 = document.querySelector('.image4');

const previousBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

nextBtn.addEventListener('click', () => {
    if (image1.classList.contains('current')) {
        image1.classList.remove('current'),
        image2.classList.add('current')
    } else if (image2.classList.contains('current')) {
        image2.classList.remove('current'),
        image3.classList.add('current')
    } else if (image3.classList.contains('current')) {
        image3.classList.remove('current'),
        image4.classList.add('current')
    } else if (image4.classList.contains('current')) {
        image4.classList.remove('current'),
        image1.classList.add('current')
    }
});

previousBtn.addEventListener('click', () => {
    if (image1.classList.contains('current')) {
        image1.classList.remove('current'),
        image4.classList.add('current')
    } else if (image2.classList.contains('current')) {
        image2.classList.remove('current'),
        image1.classList.add('current')
    } else if (image3.classList.contains('current')) {
        image3.classList.remove('current'),
        image2.classList.add('current')
    } else if (image4.classList.contains('current')) {
        image4.classList.remove('current'),
        image3.classList.add('current')
    }
});

//Ripple effect 
const button = document.querySelector('.btn');

button.addEventListener('click', (e) =>{
    let x = e.clientX - 730;
    let y = e.clientY - 500;

    let ripples = document.createElement('span');
    ripples.style.top = y + 'px';
    ripples.style.left = x + 'px';
    button.appendChild(ripples);
    setTimeout(() => {
        ripples.remove();
    }, 1000);
});

//Second-stage(addmonster) 
const monsters = document.querySelector('.monstersall');
const name = document.querySelector('#name');
const attack = document.querySelector('#quanity');
const defense = document.querySelector('#quanity2');
const donthave = document.querySelector('.donthave');
const uli = document.querySelector('.uli');
const current = document.querySelector('.current');

button.addEventListener('click', createMonster);

function createMonster() {
    //creating elements, "monsters"
    //monster div
    monsters.appendChild(uli);
    const newmonster = document.createElement('div');
    newmonster.classList.add('mymonster');
    newmonster.classList.add(name.value);
    uli.appendChild(newmonster);
    //monster li
    const newmonster1 = document.createElement('li');
    newmonster.appendChild(newmonster1);
    newmonster1.classList.add('mymonster1');
    //monster name
    const monstername = document.createElement('p');
    monstername.classList.add('monstersname');
    monstername.innerText=name.value;
    newmonster.appendChild(monstername);
    newmonster1.appendChild(monstername);
    donthave.style.display = 'none';
    name.value= '';
    //monster image
    const monsterlogo = document.createElement('IMG');
    monsterlogo.classList.add('mymonsterlogo');
    newmonster.appendChild(monsterlogo);
    newmonster1.appendChild(monsterlogo);
    let current = monsterlogo;
    if (image1.classList.contains('current')) {
        monsterlogo.setAttribute('src', './icons/air.svg')
    } else if (image2.classList.contains('current')) {
        monsterlogo.setAttribute('src', './icons/earth.svg')
    } else if (image3.classList.contains('current')) {
        monsterlogo.setAttribute('src', './icons/water.svg')
    } else if (image4.classList.contains('current')) {
        monsterlogo.setAttribute('src', './icons/fire.svg')
    }
    //monster abilities
    const damagenumber = document.createElement('p');
    const defensenumber = document.createElement('p');
    const damageicon = document.createElement('img');
    const defenseicon = document.createElement('img');
    damagenumber.innerText= attack.value;
    defensenumber.innerText = defense.value;
    newmonster1.appendChild(damagenumber);
    newmonster1.appendChild(defensenumber);
    newmonster1.appendChild(damageicon);
    newmonster1.appendChild(defenseicon);
    damageicon.setAttribute('src', './icons/attack.svg');
    defenseicon.setAttribute('src', './icons/defense.svg');
    defense.value='';
    attack.value='';
    damageicon.classList.add('damageicon');
    defenseicon.classList.add('defenseicon');
    defensenumber.classList.add('defensenumber');
    damagenumber.classList.add('damagenumber');

    //creating trash-can 
    const trashcan = document.createElement('img');
    trashcan.classList.add('trashbtn');
    newmonster1.appendChild(trashcan);
    trashcan.setAttribute('src', './icons/trash-can.svg');
    
    trashcan.addEventListener('click', () => {
        newmonster.remove();
    });
}
    
//search function 
const search = document.querySelector('.search');
const newmonster = document.querySelector('.mymonster');

search.addEventListener('search', () => {
  let search, filter, ul, div, li, i, txtValue;
  search = document.querySelector('.search');
  filter = search.value.toUpperCase();
  ul = document.querySelector('.uli');
  div = ul.getElementsByTagName('div');
  for (i = 0; i < div.length; i++) {
    a = div[i].getElementsByTagName('li')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = 'block';
    } else {
      div[i].style.display = 'none';
    }
  }
});
