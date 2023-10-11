function onlyGoodNews(score) {
    if (score >= 7) {
        console.log(`Approved with a score of ${score}`)
    }
}

onlyGoodNews(8.1);
onlyGoodNews(6.4);

function ifIsTrueISay(value) {
    if (value) {
        console.log(`It´s true [${value}]`)
    }
}

ifIsTrueISay();
ifIsTrueISay(true);
ifIsTrueISay(null);
ifIsTrueISay(undefined);
ifIsTrueISay(NaN);
ifIsTrueISay('');
ifIsTrueISay(0);
ifIsTrueISay(-1);
ifIsTrueISay(' ');
ifIsTrueISay('?');
ifIsTrueISay([]);
ifIsTrueISay([1, 2]);
ifIsTrueISay({});


