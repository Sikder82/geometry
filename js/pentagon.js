document.getElementById('pentagonBtn').addEventListener('click', function(){
    function calculateRectangle(a , b){
        if(!isNaN(a) && !isNaN(b)){
            return result = 0.5 * a * b;
        }else{
            return 'invalid input';
        }
    }
    const sideOfPentagon=document.getElementById('sideOfPentagon').value;
    const lengthOfPentagon=document.getElementById('lengthOfPentagon').value;
    const areaOfPentagon=document.getElementById('areaOfPentagon');
    const area = calculateRectangle(sideOfPentagon, lengthOfPentagon);
    areaOfPentagon.innerText = area;
});