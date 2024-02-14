document.getElementById('parallelogramBtn').addEventListener('click', function(){
    function calculateRectangle(a , b){
        if(!isNaN(a) && !isNaN(b)){
            return result = a * b;
        }else{
            return 'invalid input';
        }
    }
    const baseofParallelogram=document.getElementById('baseofParallelogram').value;
    const hightofParallelogram=document.getElementById('hightofParallelogram').value;
    const areaofParallelogram=document.getElementById('areaofParallelogram');
    const area = calculateRectangle(baseofParallelogram, hightofParallelogram);
    areaofParallelogram.innerText = area;
});