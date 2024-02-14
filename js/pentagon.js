document.getElementById('rhombusBtn').addEventListener('click', function(){
    function calculateRectangle(a , b){
        if(!isNaN(a) && !isNaN(b)){
            return result = 0.5 * a * b;
        }else{
            return 'invalid input';
        }
    }
    const distanceOfrhombus1=document.getElementById('distanceOfrhombus1').value;
    const distanceOfrhombus2=document.getElementById('distanceOfrhombus2').value;
    const areaOFRhombus=document.getElementById('areaOFRhombus');
    const area = calculateRectangle(distanceOfrhombus1, distanceOfrhombus2);
    areaOFRhombus.innerText = area;
    console.log(distanceOfrhombus1, distanceOfrhombus2);
});