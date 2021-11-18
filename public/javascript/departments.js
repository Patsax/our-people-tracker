async function departmentBtnHandler() {
    try{
    const response = await fetch('/api/department')
    const data = await response.json()
    console.log("RESPONSE ON FRONT END", data)
    } catch (err){
        
        console.log("FRONT END DEPRTMENT ERROR",err)
    }


    }


document.querySelector('#dept-btn').addEventListener('click', departmentBtnHandler());
