const kabum = {
    store: "kabum",
    url: "https://www.kabum.com.br/busca?query=",
    cpu: [
        {
            name: "5600x",
            code: "100-100000065BOX",
            xpath: {
                title: "/html/body/div[1]/main/article/section/div[2]/div/main/div[1]/a/h2",
                price: "/html/body/div[1]/main/article/section/div[2]/div/main/div[1]/a/div/span[2]",
            },
        },
        {
            name: "5800x",
            code: "100-100000063WOF",
            xpath: {
                title: "/html/body/div[1]/main/article/section/div[2]/div/main/div[2]/a/h2",
                price: "/html/body/div[1]/main/article/section/div[2]/div/main/div[2]/a/div/span[2]",
            },
        },
    ],
};

const pichau = {
    store: "pichau",
    url: "https://www.pichau.com.br/search?q=",
    cpu: [
        {
            name: "5600x",
            code: "100-100000065BOX",
            xpath: {
                title: "/html/body/div[1]/main/div[2]/div/div[1]/div[2]/div[1]/a/div/div[2]/h2",
                price: "/html/body/div[1]/main/div[2]/div/div[1]/div[2]/div[1]/a/div/div[2]/div/div[1]/div/div[2]",
            },
        },
        {
            name: "5800x",
            code: "100-100000063WOF",
            xpath: {
                title: "/html/body/div[1]/main/div[2]/div/div[1]/div[2]/div[1]/a/div/div[2]/h2",
                price: "/html/body/div[1]/main/div[2]/div/div[1]/div[2]/div[1]/a/div/div[2]/div/div[1]/div/div",
            },
        },
    ],
};

/* const terabyte = {
    store: "terabyte",
    url: "https://www.terabyteshop.com.br/busca?str=",
    cpu: [
        {
            name: "5600x",
            code: "100-100000065BOX",
            xpath: {
                title: "/html/body/div[4]/departamento/div/div[3]/div[3]/div[1]/div/div[3]/a/h2/strong",
                price: "/html/body/div[4]/departamento/div/div[3]/div[3]/div[1]/div/div[4]/div[1]/div[2]/span",
            },
        },
    ],
}; */

module.exports = {
    kabum,
    pichau
}