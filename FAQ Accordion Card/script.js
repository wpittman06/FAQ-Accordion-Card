
document.querySelectorAll('.accordion__question').forEach(item => {
    item.addEventListener('click', (event) => {
        console.log('click!');
        let accCollapse = item.nextElementSibling;

        // Open Accordion Item
        if(!item.classList.contains('open')) {
            console.log('toggle accordion button')
            // Remove "collapse", add "collapsing" class to .accordion__collapse (sibling)
            accCollapse.classList = 'accordion__collapse collapsing';
            // After X amount of time, Remove "collapsing" class and add " collapse open" class
           
            accCollapse.style.display = 'block';
            let accHeight = accCollapse.clientHeight;
            accCollapse.style.height = accHeight;
            console.log(accHeight);
            item.nextElementSibling.style.height = accHeight + 'px';
            accCollapse.style.display = '';

            accCollapse.classList = 'accordion__collapse collapsing';
           
            setTimeout(() => {
                console.log('open accordion content');
                accCollapse.classList = 'accordion__collapse collapse open'; 
                accCollapse.style.height = '';
             }, 300);
        }
        
        // Close Accordion Item
        else {
            //If it DOESN'T have class of "open"
            //remove "collapse open" from .accordian__collapse, add "collapsing"
            item.nextElementSibling.classList = 'accordion__collapse collapsing';
            
            // After X amount of time, remove "collapsing" class and add "collapse" class
            
            setTimeout(() => {
                console.log('close accordion content');
                accCollapse.classList = 'accordion__collapse collapse'; 
             }, 300);
       
        }     
        
        item.classList.toggle('open');

        item.nextElementSibling.classList.toggle('open');
    });
});