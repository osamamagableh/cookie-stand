'use strict';
let Arr2=['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let Arr3=[];
let result1=0;
function Cat(name, maximum,minimum,avgCus){
  this.name = name;
  this.maximum= maximum;
  this.minimum=minimum;
  this.avgCus=avgCus;
  this.result = 0;
  this.arr = [];
  this.average=0;
  //this.Arr2=['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
}
Cat.prototype.getavg= function(min,max){
  this.average = Math.floor(getRandomNumber(min,max)*this.avgCus);
 
}
Cat.prototype.render=function(){
  const tableDataRow = document.createElement('tr');
  x.appendChild(tableDataRow);
  const td1El = document.createElement('td');
  tableDataRow.appendChild(td1El);
  td1El.textContent=this.name;
  for(let i=0;i<Arr2.length ;i++)
    {
      
      this.getavg(this.minimum,this.maximum);
      this.arr.push(this.average);
      //Arr3.push(this.average);
      const td2El = document.createElement('td');
      tableDataRow.appendChild(td2El);
      td2El.textContent=this.arr[i];
      this.result=this.result+this.arr[i];
    }
    const td3El = document.createElement('td');
    tableDataRow.appendChild(td3El);
    td3El.textContent=this.result;
    

}

  /*const container = document.getElementById('Objects');
  const articleEl = document.createElement('article');
  container.appendChild(articleEl);
  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
  const headerRow = document.createElement('tr');
  tableEl.appendChild(headerRow);
  const th1El = document.createElement('th');
  headerRow.appendChild(th1El);
  th1El.textContent='     ';*/
  
  let x = document.createElement('table');
  document.body.appendChild(x);
  let headerRow=document.createElement('th');
  x.appendChild(headerRow);


  for (let i=0 ; i<Arr2.length;i++)
    {
    const th2El = document.createElement('th');
    x.appendChild(th2El);
    th2El.textContent=Arr2[i];
    }
    const th3El = document.createElement('th');
    x.appendChild(th3El);
    th3El.textContent='Daily Location Total';
  
function getfooter(){
  /*const container = document.getElementById('Objects');
  const articleEl = document.createElement('article');
  container.appendChild(articleEl);
  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);*/
  const headerRow = document.createElement('tr');
  x.appendChild(headerRow);
  const th1El = document.createElement('td');
  headerRow.appendChild(th1El);
  th1El.textContent='           ';
  for (let i=0 ; i<=Arr2.length;i++)
  { //result1+=Arr3[i];
    const th2El = document.createElement('th');
    headerRow.appendChild(th2El);
    //Arr3.push(Number(th2El.textContent));
    //Arr3.push(th3El[i]);
    result1+=Number(headerRow.textContent) ;
    th2El.textContent=result1;
    
  }

}

const Seatle = new Cat('SEATLE',65,23,6.3);
const tokyo = new Cat('TOKYO',24,3,1.2);
const Dubai = new Cat('DUBAI',38,11,3.7);
const Paris = new Cat('PARIS',38,20,2.3);
const Lima = new Cat('LIMA',16,2,4.6);

//getHeadert();

Seatle.getavg(Seatle.minimum,Seatle.minimum);
Seatle.render();

tokyo.getavg(tokyo.minimum,tokyo.minimum);
tokyo.render();

Dubai.getavg(Dubai.minimum,Dubai.minimum);
Dubai.render();

Paris.getavg(Paris.minimum,Paris.minimum);
Paris.render();

Lima.getavg(Lima.minimum,Lima.minimum);
Lima.render();
getfooter();
/*const Seattle = {
  name:'SEATTLE',
  maximum:65,
  minimum:23,
  avgCus:6.3,
  Arr:[],
  Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  average:0,
  result:0,
  result1:0,
  result2:0,
  result3:0,
  result4:0,
  result5:0,
  getavg: function(min,max){
    this.average = Math.floor(getRandomNumber(min,max)*this.avgCus);
   
  },
  
  render: function(){
    const container = document.getElementById('Objects');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    /*const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;*/
    /*const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i<this.Arr2.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      this.getavg(this.minimum,this.maximum);
      this.Arr.push(this.average);
      liEl.textContent = `${this.Arr2[i]}: ${this.Arr[i]}  cookies `;
      this.result=this.result+this.Arr[i];
    }
    const liE2 =document.createElement('li');
    ulEl.appendChild(liE2);
    liE2.textContent=`Total cookies : ${this.result}`;
    const tableEl = document.createElement('table');
    articleEl.appendChild(tableEl);
      getHeadert(tableEl);
      const tableDataRow = document.createElement('tr');
      tableEl.appendChild(tableDataRow);
      const td1El = document.createElement('td');
      tableDataRow.appendChild(td1El);
      td1El.textContent=this.name;
      for(let i=0;i<this.Arr2.length ;i++)
      {
        
        this.getavg(this.minimum,this.maximum);
        this.Arr.push(this.average);
        const td2El = document.createElement('td');
        tableDataRow.appendChild(td2El);
        td2El.textContent=this.Arr[i];
        this.result1=this.result1+this.Arr[i];
      }
      const td3El = document.createElement('td');
      tableDataRow.appendChild(td3El);
      td3El.textContent=this.result1;
      

  }
  
  
  
  
  /*th1El.textContent = 'Good With Dogs';
  const th2El = document.createElement('th');
  headerRowEl.appendChild(th2El);
  th2El.textContent = 'Good With Cats';
  const th3El = document.createElement('th');
  headerRowEl.appendChild(th3El);
  th3El.textContent = 'Good With Kids';
  const tableDataRow = document.createElement('tr');
  tableEl.appendChild(tableDataRow);
  const td1El = document.createElement('td');
  tableDataRow.appendChild(td1El);
  td1El.textContent = this.isGoodWithDogs;
  const td2El = document.createElement('td');
  tableDataRow.appendChild(td2El);
  td2El.textContent = this.isGoodWithCats;
  const td3El = document.createElement('td');
  tableDataRow.appendChild(td3El);
  td3El.textContent = this.isGoodWithKids;
};
Seattle.getavg(Seattle.minimum,Seattle.maximum);
Seattle.render();

const Tokyo = {
    name:'TOKYO',
    maximum:24,
    minimum:3,
    avgCus:1.2,
    Arr:[],
    Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    result:0,
    getavg: function(min,max){
        this.average = Math.floor(getRandomNumber(min,max)*this.avgCus);
    },
    render: function(){
     /* const container = document.getElementById('Objects');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.name;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.Arr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getavg(this.minimum,this.maximum);
        this.Arr.push(this.average);
        liEl.textContent = `${this.Arr2[i]}: ${this.Arr[i]}  cookies `;
        this.result=this.result+this.Arr[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.result}`;
      const container = document.getElementById('Objects');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const tableEl = document.createElement('table');
      articleEl.appendChild(tableEl);
      const tableDataRow = document.createElement('tr');
      tableEl.appendChild(tableDataRow);
      const td1El = document.createElement('td');
      tableDataRow.appendChild(td1El);
      td1El.textContent=this.name;
      for(let i=0;i<this.Arr2.length ;i++)
      {
        
        this.getavg(this.minimum,this.maximum);
        this.Arr.push(this.average);
        const td2El = document.createElement('td');
        tableDataRow.appendChild(td2El);
        td2El.textContent=this.Arr[i];
        this.result2=this.result2+this.Arr[i];
      }
      const td3El = document.createElement('td');
      tableDataRow.appendChild(td3El);
      td3El.textContent=this.result2;
    }
  };

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Tokyo.getavg(Seattle.minimum,Seattle.maximum);
  Tokyo.render();

  const Dubai = {
    name:'DUBAI',
    maximum:38,
    minimum:11,
    avgCus:3.7,
    Arr:[],
    Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    result:0,
    getavg: function(min,max){
        this.average = Math.floor(getRandomNumber(min,max)*this.avgCus);
    },
    render: function(){
      const container = document.getElementById('Objects');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.name;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.Arr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getavg(this.minimum,this.maximum);
        this.Arr.push(this.average);
        liEl.textContent = `${this.Arr2[i]}: ${this.Arr[i]}  cookies `;
        this.result=this.result+this.Arr[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.result}`;
    }
  };

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Dubai.getavg(Seattle.minimum,Seattle.maximum);
  Dubai.render();

  const Paris = {
    name:'PARIS',
    maximum:38,
    minimum:20,
    avgCus:2.3,
    Arr:[],
    Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    result:0,
    getavg: function(min,max){
      this.average = Math.floor(getRandomNumber(min,max)*this.avgCus);
    },
    render: function(){
      const container = document.getElementById('Objects');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.name;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.Arr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getavg(this.minimum,this.maximum);
        this.Arr.push(this.average);
        liEl.textContent = `${this.Arr2[i]}: ${this.Arr[i]}  cookies `;
        this.result=this.result+this.Arr[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.result}`;
    }
  };

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Paris.getavg(Seattle.minimum,Seattle.maximum);
  Paris.render();

  const Lima = {
    name:'LIMA',
    maximum:16,
    minimum:2,
    avgCus:2.3,
    Arr:[],
    Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    result:0,
    getavg: function(min,max){
        this.average = Math.floor(getRandomNumber(min,max)*this.avgCus);
    },
    render: function(){
      const container = document.getElementById('Objects');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.name;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.Arr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getavg(this.minimum,this.maximum);
        this.Arr.push(this.average);
        liEl.textContent = `${this.Arr2[i]}: ${this.Arr[i]}  cookies `;
        this.result=this.result+this.Arr[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.result}`;
    }
  };*/

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//Lima.getavg(Seattle.minimum,Seattle.maximum);
 //Lima.render();
