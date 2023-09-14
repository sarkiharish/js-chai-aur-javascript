const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const report = document.querySelector('#report')

    if(height==='' || height < 0  || isNaN(height)){
        results.innerHTML=`<span>Please provide valid height ${height}</span>`
    } else if(weight==='' || weight < 0 || isNaN(weight)) {
        results.innerHTML=`<span>Please provide valid weight ${weight}</span>`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`
        if(bmi < 18.6) {
            results.append(` You're Under Weight.`)
        } else if(bmi >= 18.6 && bmi <= 24.9) {
            results.append(` You are in Normal range.`)
        } else {
            
            results.append(` You are over weight.`)
        }
    }

   
})


//..........
// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });

// Under Weight = Less than 18.6

// Normal Range = 18.6 and 24.9

// Overweight = Greater than 24.9