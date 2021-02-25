const $contents = document.querySelector('#contents');

// コンテンツの配列
const contents = [
    {
        img: 'img/廃.jpeg',
        p: '廃'
    }, {
        img: 'img/Write-copy.jpeg',
        p: 'Write'
    }, {
        img: 'img/Workwith.jpeg',
        p: 'WorkWith'
    }, {
        img: 'img/DataMania.jpeg',
        p: 'DataMania'
    }, {
        img: 'img/Kneipp.jpeg',
        p: 'Kneipp'
    }, {
        img: 'img/蒼乃建設.jpeg',
        p: '蒼乃建設'
    }, {
        img: 'img/Pas-Pol.jpeg',
        p: 'Pas-Pol'
    }
]

// contets追加
for (let index = 0; index < contents.length; index++) {
    const element = contents[index];
    // a,img,pを作る
    const content = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');
    // a,img,pにクラスを追加する
    content.classList.add('main_works_contents_content');
    img.classList.add('main_works_contents_content-img');
    p.classList.add('main_works_contents_content-sentence');
    // img,pに配列（オブジェクト）の内容を入れる
    img.src = element.img;
    p.textContent = element.p;
    // a,img,pを子要素に追加する
    content.appendChild(img);
    content.appendChild(p);
    $contents.appendChild(content);
}
