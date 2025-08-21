alert("Задание 6.\n\nСоздать html-страницу с возможностью забронировать билеты на поезд. Для начала пользователь выбирает направление поезда и дату поездки, дальше отмечает места для брони. Также добавить возможность посмотреть уже забронированные билеты. Хранить информацию в заранее подготовленных массивах.");

const key = '_sasha_';
const datSel = [
    [5500, 'Смоленск — Архангельск'],
    [2500, 'Москва — Калининград'],
    [3000, 'Самара — Караганды'],
    [4500, 'Кисловодск — Тында'],
    [3500, 'Орск — Кисловодск'],
    [3700, 'Анапа — Красноярск']
];
const frmt = new Intl.NumberFormat('ru', {style: 'currency', currency: 'RUB'});
const ids = ['sel', 'dat', 'btn', 'tab', 'btk', 'prs', 'cnt', 'hide', 'frm', 'del'];
const [sel, dat, btn, tab, btk, prs, cnt, hide, frm, del] = ids.map(id => document.getElementById(id));
 
const getStorage = k => localStorage.getItem(k) ?? '[]';
const setStorage = (k, o) => localStorage.setItem(k, JSON.stringify(o));
const elem = (a, b) => a.appendChild(document.createElement(b));
const setDat = d => d.value = new Date().toLocaleDateString().split(/\D+/).reverse().join('-');
const setSel = d => d.forEach(([p, c]) => sel.append(new Option(c, p)));
const getChecks = a => [...a.querySelectorAll('input')];
 
const ins = (e, i) => {
    e.insertAdjacentHTML(
        'beforeEnd',
        `<label><input type="checkbox" value="${i}" />${i}</label>`
    );
};
const createTab = b => {
    let tbody = ['table', 'tbody'].reduce((a, b) => elem(a, b), b);
    let [tr1, tr2] = [0, 0].map(() => tbody.insertRow());
    for(let i = 0, j = 1; i < 28; i++) {
        if(j % 2) ins(tr1.insertCell(), j);
        else ins(tr2.insertCell(), j);
        ++j;
    }
};
const showTab = o => {
    cnt.innerHTML = '';
    o.checks.forEach(n => {
        cnt.insertAdjacentHTML(
            'beforeEnd',
            `<tr><td>${o.route}</td><td>${o.data}</td><td>${n}</td></tr>`
        );
    });
};
const setCheck = (o, b) => {
    o.checks.forEach(n => b.forEach(
        inp => inp.value == n ? inp.checked = true : null
    )); 
};
const getVars = () => {
    return {
        opt: sel.options[sel.selectedIndex],
        strg: JSON.parse(getStorage(key)),
        inps: getChecks(tab),
    }
};
 
[[createTab, tab], [setDat, dat], [setSel, datSel]].forEach(([f, p]) => f(p));
 
frm.addEventListener('submit', e => e.preventDefault());
del.addEventListener('click', e => localStorage.removeItem(key));
 
btn.addEventListener('click', e => {
    let {opt, strg, inps} = getVars();
    let obj = strg.find(({data, route}) => data === dat.value && route === opt.text);
    
    hide.classList.add('hide');
    inps.forEach(inp => inp.checked = false);
    prs.innerText = frmt.format(0); 
    
    if(obj?.checks.length) {
        hide.classList.remove('hide');
        showTab(obj);
        setCheck(obj, inps);
        prs.innerText = frmt.format(obj.price);
    }
});
 
btk.addEventListener('click', e => {
    let {opt, strg, inps} = getVars();
    let obj = strg.find(({data, route}) => data === dat.value && route === opt.text);
    
    inps = inps.filter(el => el.checked).map(({value}) => Number(value));
    hide.classList.add('hide');
    
    if(obj) {
        obj.checks = inps;
        obj.price = opt.value * inps.length;
        prs.innerText = frmt.format(obj.price);
    } else {
        strg.push({
            data: dat.value,
            checks: inps,
            route: opt.text,
            price: opt.value * inps.length
        });
        prs.innerText = frmt.format(opt.value * inps.length);
    }
    
    setStorage(key, strg);
});
 
// btn.dispatchEvent(new Event('click'));
