document.getElementById('triangleBtn').addEventListener('click', function(){
    function calculateTriangle(a , b){
        if(!isNaN(a) && !isNaN(b)){
            return result = 0.5 * a * b;
        }else{
            return 'invalid input';
        }
    }
    const baseOfTriangle=document.getElementById('baseOfTriangle').value;
    const hightOfTriangle=document.getElementById('hightOfTriangle').value;
    const areaOfTriangle=document.getElementById('areaOfTriangle');
    const area = calculateTriangle(baseOfTriangle, hightOfTriangle);
    areaOfTriangle.innerText = area;
});