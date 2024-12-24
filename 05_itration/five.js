const coding = ["js", "cpp", "react", "java", "hitmlcss"]


coding.forEach(function (val) {
    //console.log(val);
})

coding.forEach((i) => {
    ///console.log(i)
})

function printme(i) {
    //console.log(i)
}

//coding.forEach(printme)

coding.forEach((item, index, arr) => {
    //console.log(item,index,arr)
})

const mycoding = [
    {
        langname: "js",
        langfile: "javascript"
    },

    {

        langname: "java",
        langfile: "java"
    },

    {
        langname: "pythonn",
        langfile: "py"
    }
]

mycoding.forEach((item) => {
    console.log(item.langname);
    console.log(item.langfile);
})