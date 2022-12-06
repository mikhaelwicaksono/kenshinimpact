$(document).ready(()=>{

    let slideCount = 4
    let currSlide  = 0
    let contents = $('.news-item');
    const nextItem = () =>{
        contents[currSlide].className = "news-item"

        currSlide + 1 === slideCount ? currSlide = 0 : currSlide += 1

        contents[currSlide].className = "news-item active"
    }

setInterval(nextItem, 6000)

})