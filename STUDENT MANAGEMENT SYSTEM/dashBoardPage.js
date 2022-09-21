//

let Catch_Student_Details = JSON.parse(localStorage.getItem("Students_Details")) || [];
// console.log(Catch_Student_Details);

display(Catch_Student_Details);

function display(data){
    data.forEach(function(elem, index) {
        
        let card = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("img");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");

        td1.textContent= elem.name;
        td2.textContent= elem.course;
        td3.textContent= elem.unit;
        td4.setAttribute("src", elem.image);
        td5.textContent= elem.batch;
        td6.textContent= "Remove";
        td6.style.color= "red";
        td6.style.cursor= "pointer";

        td6.addEventListener("click", function(){
            removeItem(elem, index)
        });

        card.append(td1, td2, td3, td4, td5, td6);

        document.querySelector("tbody").append(card);

    });

    // navbar details

     // total number of students count----
     let len="";
     let count=0;
     for(let i=0; i<Catch_Student_Details.length; i++){
         len += [i];
         count++;
     }
     // console.log(count)
     document.querySelector("#total").innerHTML= "Total_Students = "+count;     // displaying on the navbar

     //******************** */

         // total number of batch-1 students count----
     let len1="";
     let count1=0;
     for(let i=0; i<Catch_Student_Details.length; i++){
         if(Catch_Student_Details[i].batch=="FW14"){
            count1++; 
         }
     }
     // console.log(count1)
     document.querySelector("#FW14").innerHTML= "Batch_01 - "+count1;    // displaying on the navbar    

    // total number of batch-2 students count----
    let len2="";
    let count2=0;
    for(let i=0; i<Catch_Student_Details.length; i++){
        if(Catch_Student_Details[i].batch=="FW15"){
           count2++; 
        }
    }
    // console.log(count2)
    document.querySelector("#FW15").innerHTML= "Batch_02 - "+count2;    // displaying on the navbar  

    // totaol number of batch-1 students count----
    let len3="";
    let count3=0;
    for(let i=0; i<Catch_Student_Details.length; i++){
        if(Catch_Student_Details[i].batch=="FW16"){
           count3++; 
        }
    }
    // console.log(count3)
    document.querySelector("#FW16").innerHTML= "Batch_03 - "+count3;    // displaying on the navbar  

    // total number of batch-2 students count----
    let len4="";
    let count4=0;
    for(let i=0; i<Catch_Student_Details.length; i++){
        if(Catch_Student_Details[i].batch=="FW17"){
           count4++; 
        }
    }
    // console.log(count4)
    document.querySelector("#FW17").innerHTML= "Batch_04 - "+count4;    // displaying on the navbar  

    // total number of batch-1 students count----
    let len5="";
    let count5=0;
    for(let i=0; i<Catch_Student_Details.length; i++){
        if(Catch_Student_Details[i].batch=="FW18"){
           count5++; 
        }
    }
    // console.log(count5)
    document.querySelector("#FW18").innerHTML= "Batch_05 - "+count5;    // displaying on the navbar  

    // total number of batch-2 students count----
    let len6="";
    let count6=0;
    for(let i=0; i<Catch_Student_Details.length; i++){
        if(Catch_Student_Details[i].batch=="FW19"){
           count6++; 
        }
    }
    // console.log(count6)
    document.querySelector("#FW19").innerHTML= "Batch_06 - "+count6;    // displaying on the navbar 

    
};
 let arr = JSON.parse(localStorage.getItem("trash")) || [];

function removeItem(elem, index){

    Catch_Student_Details.splice(index, 1);
    localStorage.setItem("Students_Details", JSON.stringify(Catch_Student_Details));
    arr.push(elem)
    localStorage.setItem("trash", JSON.stringify(arr));
    window.location.reload();   
    
};




