foods = [
    {
        name: 'Pizza',
        price: 1,
        amount: 1,
    },

    {
        name: 'Humberger',
        price: 2,
        amount: 1,

    },

    {
        name: 'Humberger',
        price: 3,
        amount: 1,

    },
]





const $ = document.querySelector.bind(document) 
const $$ = document.querySelectorAll.bind(document) 




const listFood = $('.list__food');


function render() {
    const html = foods.map((food) => {
        return `
        <li>
        <span class='name__food'>${food.name}</span>
        <div>
             <button class="button__desc">-</button>
        <span class="amount">1</span>
        <button class="button__add">+</button>
        </div>
       <div>
         <span class="price">$ ${food.price}</span>
        <button class= 'button__delete'>X</button>
       </div>
    </li>
        `
    })

    listFood.innerHTML = html.join('');
}
render()




let amount = $$('.amount');



const buttonaddFood = $('.button__add-food')
const model = $('.model__add-food')

let buttondec = $$('.button__desc');
let buttonadd = $$('.button__add');

let buttonDeletes = $$('.button__delete')
const add = $('.add') 

function addFood() {
    let food = {}
    add.addEventListener('click', function() {
        const newFood = $('.newfood')
         const newprice = $('.newprice')
       if (newFood.value !== '' && newprice.value !== '') {
        food = {
            name: newFood.value,
            price: newprice.value
        }
        foods.push(food)
        render()
        amount = $$('.amount');
        buttonadd = $$('.button__add');
        buttondec = $$('.button__desc');
        buttonDeletes = $$('.button__delete')
        addamount()
        descamount()
        deletefood()
       } 
       model.style.display = 'none'
       newFood.value = ''
       newprice.value = ''
})
}
buttonaddFood.addEventListener('click', function() {
    model.style.display = 'block'
    addFood()
    
})



function adda (index) {
    const curnentAmount = amount[index].innerHTML;
        const newAmount = Number(curnentAmount) + 1;
        amount[index].innerHTML = newAmount;
}



function decs (index) {

    if (Number(amount[index].innerHTML > 0)) {
    
     const curnentAmount = Number(amount[index].innerHTML);
    
         const newAmount = curnentAmount - 1;
         amount[index].innerHTML = newAmount;
     
    }
}


function descamount() {
    for (let i = 0 ; i < buttondec.length; i++) {
        buttondec[i].addEventListener('click', function() {
            decs(i)
        })
    }
}

descamount()

function addamount() {
    for (let i = 0 ; i < buttonadd.length; i++) {
        buttonadd[i].addEventListener('click', function() {
            adda(i)
        })
    }
}
addamount()




function deletefood () {
    
buttonDeletes.forEach((buttonDelete, index) => {
    buttonDelete.addEventListener('click', () => {
        foods.splice(index, 1);
        amount = $$('.amount');
        buttonadd = $$('.button__add');
        buttondec = $$('.button__desc');
        addamount();
        descamount();
        buttonDeletes = $$('.button__delete');
       if (buttonDeletes.length > 1) {
        buttonDeletes[index].parentElement.parentElement.remove()
        buttonDeletes = $$('.button__delete');
       }

       else {
        foods.splice(0, foods.length);
        render()
        
       }
    
    });
});
}

deletefood()


const total = $('.total')


function totals() {
    let subtotal = 0
    let html ;
   
        for (let i = 0 ; i < foods.length; i++) {
            let amounts = Number(amount[i].innerHTML)
            subtotal += Number(foods[i].price) * amounts
        }
    
        const Shipping = 2;

        let allTotal = 0;
        if (subtotal > 0) {
            allTotal = subtotal + Shipping
        }
         html = `
            <li>Subtotal <span>$ ${subtotal}</span></li>
            <li>Shipping <span>$ ${Shipping}</span></li>
            <li>Total(TVA incl) <span>$ ${allTotal}</span></li>
        `
        
        
    total.innerHTML = html
}


const checkOut = $('.checkout')
checkOut.addEventListener('click', () => {
    console.log(amount)
    totals()
})


