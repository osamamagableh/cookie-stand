'use strict';
const Seattle = {
  name:'SEATTLE',
  maximum:65,
  minimum:23,
  avgCus:6.3,
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
  };

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Lima.getavg(Seattle.minimum,Seattle.maximum);
  Lima.render();
