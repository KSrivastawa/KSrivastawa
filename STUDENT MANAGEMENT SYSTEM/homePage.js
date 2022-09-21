//

function Student_Input(student_name,student_course,student_unit,student_image,student_batch){
    this.name = student_name;
    this.course = student_course;
    this.unit = student_unit;
    this.image = student_image;
    this.batch = student_batch;
}

    let SSM_input_details = [];          // SSM - student system management

function submitForm(){
    event.preventDefault();

    let form = document.querySelector("#form");

    let input_name = form.name.value;
    let input_course = form.course.value;
    let input_unit = form.unit.value;
    let input_image = form.image.value;
    let input_batch = form.batch.value;


    let student_Details = new Student_Input(input_name, input_course, input_unit, input_image, input_batch );
    console.log("new: ",student_Details)

    SSM_input_details.push(student_Details);
    console.log("arr: ",SSM_input_details);

    localStorage.setItem("Students_Details", JSON.stringify(SSM_input_details));

    // total number of students count----
    let len="";
    let count=0;
    for(let i=0; i<SSM_input_details.length; i++){
        len+= [i];
        count++;
    }
    // console.log(count)
    document.querySelector("#total").innerHTML= "Total_Students = "+count;     // displaying on the navbar

    //******************* */

    // total number of batch-1 students count----
    let len1="";
    let count1=0;
    for(let i=0; i<SSM_input_details.length; i++){
        if(SSM_input_details[i].batch=="FW14"){
           count1++; 
        }
    }
    // console.log(count1)
    document.querySelector("#FW14").innerHTML= "Batch_01 - "+count1;    // displaying on the navbar  

    // total number of batch-2 students count----
    let len2="";
    let count2=0;
    for(let i=0; i<SSM_input_details.length; i++){
        if(SSM_input_details[i].batch=="FW15"){
           count2++; 
        }
    }
    // console.log(count2)
    document.querySelector("#FW15").innerHTML= "Batch_02 - "+count2;    // displaying on the navbar  

    // total number of batch-3 students count----
    let len3="";
    let count3=0;
    for(let i=0; i<SSM_input_details.length; i++){
        if(SSM_input_details[i].batch=="FW16"){
           count3++; 
        }
    }
    // console.log(count3)
    document.querySelector("#FW16").innerHTML= "Batch_03 - "+count3;    // displaying on the navbar  

    // total number of batch-4 students count----
    let len4="";
    let count4=0;
    for(let i=0; i<SSM_input_details.length; i++){
        if(SSM_input_details[i].batch=="FW17"){
           count4++; 
        }
    }
    // console.log(count4)
    document.querySelector("#FW17").innerHTML= "Batch_04 - "+count4;    // displaying on the navbar  

    // total number of batch-5 students count----
    let len5="";
    let count5=0;
    for(let i=0; i<SSM_input_details.length; i++){
        if(SSM_input_details[i].batch=="FW18"){
           count5++; 
        }
    }
    // console.log(count5)
    document.querySelector("#FW18").innerHTML= "Batch_05 - "+count5;    // displaying on the navbar  

    // total number of batch-6 students count----
    let len6="";
    let count6=0;
    for(let i=0; i<SSM_input_details.length; i++){
        if(SSM_input_details[i].batch=="FW19"){
           count6++; 
        }
    }
    // console.log(count6)
    document.querySelector("#FW19").innerHTML= "Batch_06 - "+count6;    // displaying on the navbar  
    

    document.querySelector("#name").value=null;
    document.querySelector("#course").value= null;
    document.querySelector("#unit").value=null;
    document.querySelector("#image").value=null;
    document.querySelector("#batch").value=null;
    
}