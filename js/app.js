let some_id = document.getElementById(`name`);
some_id[`style`][`backgroundColor`] = `green`;
some_id[`style`][`fontSize`] = `2rem`;

let class_same = document.querySelectorAll(`.sports`);
let count = 0;
for (count = 0; count < class_same.length; count++) {
    class_same[count][`innerHTML`] = class_same[count][`innerHTML`] + `  This is the text`;
}

let class_image = document.getElementsByClassName(`image`);
let image_count = 0;
while (image_count < class_image.length) {
    class_image[image_count].setAttribute(`src`, `https://images.unsplash.com/photo-1657915118196-7e4091a522ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`);
    image_count++;
}

let p_tag = document.getElementsByTagName(`p`);
let count_p = 0;
for(count_p=0; count_p < p_tag.length; count_p++){
    let does_include = p_tag[count_p][`innerHTML`].includes(`link`);
    if(does_include === true){
       p_tag[count_p][`innerHTML`] += `   <a href="https://google.com">Google</a>`;
    }
}