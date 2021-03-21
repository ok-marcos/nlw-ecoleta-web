

function populateUFs(){
  const ufSelect = document
  .querySelector("select[name=uf]")
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then(res => res.json())
  .then(states => {

    for(const state of states)
    {
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
   

  }) 


}

populateUFs()

function getCityes(event){
  const citiesSelect = document.querySelector("select[name=city]") 
  const stateInput = document.querySelector("[name=state]") 

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text


  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citiesSelect.innerHTML = "<option value>Seleciona a cidade</option>"

  citiesSelect.disabled = false // Desabilitar o campo cidade


  fetch(url)
  .then(res => res.json())
  .then(cities => {

    for(const city of cities)
    {
      citiesSelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }
   citiesSelect.disabled = false

  }) 
  

}

document
 .querySelector("select[name=uf]")
 .addEventListener("change", getCityes)
 

 //itens de coleta
 //pegar todos os li's 
 const itemsToCollected = document.querySelectorAll(".items-grid li")

 for(const item of itemsToCollected){
   item.addEventListener("click", handleSelectedItem)
 }

 const colectedItems = document.querySelector("input[name=items]")

 let selectedItems = []

 function handleSelectedItem(event){
   const itemLi = event.target

   // adicionar ou remover uma classe com javascript
   itemLi.classList.toggle("selected") //Add iria adicionar, remove iria remover, toggle faz os dois, se existir o selected, ele irá remover, se não, irá adicionar
   const itemId = itemLi.dataset.id

   

   //verificar se existem itens selecionados, se sim


   // pegar os itens selecionados
   const alreadySelected = selectedItems.findIndex(item => {
     const itemFound = item == itemId //isso será true ou false
     return itemFound
   })
   

   //se estiver selecionado, tirar da seleção 
  if(alreadySelected >= 0){
    //tirar da seleção
    const filteredItems = selectedItems.filter(item =>{
      const itemIdDifferent = item != itemId //false 
      return itemIsDifferent
    })
    selectedItems = filteredItems
  }else{
    //se não estiver selecionado, adicionar seleção
    selectedItems.push(itemId)

  }

   
   //atualizar o campo escondido com os itens selecionado
  colectedItems.value = selectedItems
 
  }