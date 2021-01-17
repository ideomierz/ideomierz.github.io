let a1=50, b1=50, c1=50, d1=50, e1=50, f1=50, g1=50, h1=50, i1=50;
let aq=0, bq=0, cq=0, dq=0, eq=0, fq=0, gq=0, hq=0, iq=0;
let arecent=0, brecent=0, crecent=0, drecent=0, erecent=0, frecent=0, grecent=0, hrecent=0, irecent=0;

let qnr=0;

class Question {
	constructor (content="",a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,extra="") {
		this.content = content;
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.e = e;
		this.f = f;
		this.g = g;
		this.h = h;
		this.i = i;
		this.extra = extra;
	}
	effect(opt) {
		arecent=(50/aq*opt)*this.a;
		a1+=arecent;
		brecent=(50/bq*opt)*this.b;
		b1+=brecent;
		crecent=(50/cq*opt)*this.c;
		c1+=crecent;
		drecent=(50/dq*opt)*this.d;
		d1+=drecent;
		erecent=(50/eq*opt)*this.e;
		e1+=erecent;
		frecent=(50/fq*opt)*this.f;
		f1+=frecent;
		grecent=(50/gq*opt)*this.g;
		g1+=grecent;
		hrecent=(50/hq*opt)*this.h;
		h1+=hrecent;
		irecent=(50/iq*opt)*this.i;
		i1+=irecent;
	}
}

let q = [
	new Question("Ograniczenie wolności jednostki jest dopuszczalne, gdy służy interesowi ponadjednostkowemu",-1),
	new Question("Wolność jednego człowieka powinna kończyć się tam, gdzie zaczyna się wolność drugiego",1),
	new Question("Społeczeństwo powinno opierać się na otwartości na różne światopoglądy i style życia, nie narzucając ogólnych wzorców postępowania",1),
	new Question("Religia jest sprawą prywatną",1),
	new Question("Rola jednostki powinna być rozpatrywana przede wszystkim w relacji do większej całości",-1),
	new Question("Gospodarka powinna być zbudowana w pełni na fundamencie prywatnej inicjatywy jednostki, dążącej do osobistego zysku",1),
	new Question("Wolny rynek nie jest najwłaściwszym sposobem urządzenia gospodarki, m.in. dlatego, że realizuje jedynie partykularne interesy i nie jest zorientowany ku dobru wspólnemu",-1),
	new Question("Społeczeństwo to coś więcej, niż tylko suma jednostek",-1),
	new Question("Obrót ziemią powinien podlegać takim samym mechanizmom, jak w przypadku innych transakcji",0.5,0,0,0,0.3,0,0.2),
	new Question("Dobrze jest, gdy w społeczeństwie istnieją powszechnie poważane autorytety",-0.6,-0.4),
	new Question("Społeczeństwo powinno być ukształtowane w sposób hierarchiczny",0,-1),
	new Question("Powinny istnieć odrębne stany/kasty, pomiędzy którymi mobilność społeczna byłaby ograniczona",0,-1),
	new Question("Niektórzy ludzie są z natury lepsi i bardziej wartościowi od innych",0,-1),
	new Question("Ludzie są różni, lecz równowartościowi",0,1),
	new Question("Najlepszy jest taki ustrój polityczny, który zapewnia wszystkim możliwie równy stopień decyzyjności",0,1),
	new Question("Wszelka nierówność pomiędzy ludźmi jest niesprawiedliwa i musi zostać ostatecznie wyeliminowana na drodze do lepszego społeczeństwa",0,1),
	new Question("Popieram koncepcję praw człowieka, uniwersalnych dla całego rodzaju ludzkiego",0,0,1),
	new Question("Byłoby najlepiej, gdyby preferowany przeze mnie ustrój polityczny zapanował na całym świecie",0,0,1),
	new Question("Globalizacja jest nieunikniona, należy jedynie zadbać, by przybrała postać, w której najbardziej przysłuży się ludzkości",0,0,1),
	new Question("To, co sprawdza się w jednym miejscu na świecie, na ogół będzie również sprawdzać się w innym",0,0,1),
	new Question("Wyznawana przeze mnie religia (lub moja areligijność) powinna zapanować na całym świecie",0,0,1),
	new Question("Globalizacja ma więcej wad, niż zalet",0,0,-1),
	new Question("Bardziej, niż o ludzkości, należy mówić o różnych kulturach, cywilizacjach czy etnosach",0,0,-1),
	new Question("Imigracja na skalę prowadzącą do zmiany struktury etnicznej społeczności jest niepożądana",0,0,-1),
	new Question("Wprowadzanie zachodnich wzorców kulturowych i stylu życia wśród ludów niezachodnich ma dla nich najczęściej negatywne konsekwencje",0,0,-1),
	new Question("Powinniśmy bronić „nieracjonalnych” cech naszej kultury, które odróżniają nas od innych",0,0,-0.7,0,-0.3),
	new Question("Naród jest dla mnie istotną wartością",0,0,0,1),
	new Question("Polityka państwa powinna być podporządkowana w pierwszej kolejności interesowi narodowemu",0,0,0,1),
	new Question("Mniejszości narodowe i etniczne żyjące na terytorium naszego państwa muszą zostać zasymilowane",0,0,0,1),
	new Question("Granice międzypaństwowe powinny być wytyczone w oparciu o kryterium narodowościowe",0,0,0,1),
	new Question("Łatwiej zaakceptowałbym zwierzchnictwo obcego państwa o ideologii podobnej do mojej, niż trwałe panowanie ideologii znacząco różnej od mojej w niepodległym państwie mojego narodu",0,0,0,-1),
	new Question("Istnieją formy państwa na ogół lepsze od państwa narodowego",0,0,0,-1),
	new Question("Nowożytny naród stanowi bardziej sztuczną „wspólnotę wyobrażoną”, niż prawdziwą, istotną formę uspołecznienia",0,0,0,-1),
	new Question("Nie mam nic przeciwko urzędowemu statusowi języków mniejszości etnicznych i narodowych na terenach, gdzie stanowią znaczną część ludności",0,0,0,-1),
	new Question("Wierzę w zasadę postępu jako uniwersalne prawidło historii",0,0,0,0,1),
	new Question("Historia ostatnich stuleci powinna być interpretowana raczej w kategoriach coraz większej degradacji, niż postępu",0,0,0,0,-1),
	new Question("Religia powinna odgrywać znaczną rolę w społeczeństwie",0,0,0,0,-1),
	new Question("Wychowanie powinno opierać się o tradycję i wartości, które przekazali nam przodkowie",0,0,0,0,-1),
	new Question("Związki homoseksualne powinny dysponować takimi samymi przywilejami, jak te heteroseksualne",0,0,0,0,1),
	new Question("Dokonane w procesie dziejowym „odczarowanie świata” było zjawiskiem pozytywnym, bez którego nie byłyby możliwe narodziny naukowego sposobu myślenia",0,0,0,0,1),
	new Question("Role społeczne tradycyjnie przypisywane płciom są w dużej mierze nieuzasadnione i szkodliwe",0,0,0,0,1),
	new Question("W czasach współczesnych degeneracja zaszła tak daleko, że nie przetrwało już prawie nic, co byłoby warte zachowywania",0,0,0,0,-1),
	new Question("Byt określa świadomość",0,0,0,0,0,1),
	new Question("Dla zrozumienia wydarzeń, które miały miejsce w danej epoce, konieczne jest w pierwszej kolejności zrozumienie sposobu myślenia ludzi w niej żyjących",0,0,0,0,0,-1),
	new Question("Główną przyczyną wszelkich rewolucji są złe warunki materialne",0,0,0,0,0,1),
	new Question("To idee same w sobie kształtują i zmieniają świat, decydując o najważniejszych historycznych przełomach",0,0,0,0,0,-1),
	new Question("Zasadniczą osią całej historii ludzkości jest kwestia własności środków produkcji",0,0,0,0,0,1),
	new Question("Tym, co decyduje o historycznym powodzeniu lub klęsce danej zbiorowości jest jej charakter, formowany przez dominującą ideę czy religię",0,0,0,0,0,-1),
	new Question("Należy ostatecznie odejść od nieekologicznych źródeł energii, nawet, jeżeli oznaczałoby to wzrost kosztów",0,0,0,0,0,0,-1),
	new Question("Dla ratowania środowiska naturalnego konieczna jest drastyczna depopulacja ludzkości do niewielkiego ułamka obecnej liczby ludzi na Ziemi",0,0,0,0,0,0,-1),
	new Question("Znaczne przekształcenia naturalnych ekosystemów są dopuszczalne, jeśli prowadzi to do zwiększenia poziomu życia ludzi",0,0,0,0,0,0,1),
	new Question("Nadrzędnym celem politycznym powinno być stworzenie warunków dla wzrostu gospodarczego i zwiększenia produkcji",0,0,0,0,0,0,1),
	new Question("Konieczne jest większe skoncentrowanie wysiłków na walce z globalnym ociepleniem",0,0,0,0,0,0,-1),
	new Question("Sposób produkcji żywności powinien opierać się w pierwszej kolejności na zasadzie ekonomicznej efektywności",0,0,0,0,0,0,1),
	new Question("Urbanizacja obejmująca większość społeczeństwa jest zjawiskiem pozytywnym",0,0,0,0,0.3,0,0.4,0.3),
	new Question("„Rewolucja przemysłowa i jej konsekwencje były katastrofą dla rodzaju ludzkiego”",0,0,0,0,0,0,0,-1),
	new Question("Powinniśmy dążyć do eksploracji przestrzeni kosmicznej i kolonizacji innych planet",0,0,0,0,0,0,0,1),
	new Question("Potencjalne zalety wdrożenia idei transhumanizmu przewyższają niebezpieczeństwa",0,0,0,0,0,0,0,1),
	new Question("Powrót do technik gospodarowania sprzed automatyzacji i industrializacji byłby pożądany",0,0,0,0,0,0,0,-1),
	new Question("Nie powinniśmy obawiać się znacznych zmian w sposobie życia wywołanych szybkim rozwojem technologii",0,0,0,0,0,0,0,1)
];

function start() {
	for (let i=0;i<q.length;i++) {
		aq+=Math.abs(q[i].a);
		bq+=Math.abs(q[i].b);
		cq+=Math.abs(q[i].c);
		dq+=Math.abs(q[i].d);
		eq+=Math.abs(q[i].e);
		fq+=Math.abs(q[i].f);
		gq+=Math.abs(q[i].g);
		hq+=Math.abs(q[i].h);
		iq+=Math.abs(q[i].i);
	}
	q = shuffle(q);
	document.querySelector(".back").disabled=true;
	display(0);
}

function shuffle(a) {
    for (let i=a.length-1;i>0;i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function display(nr) {
	document.getElementById("questiondisplay").innerHTML = q[nr].content;
	document.getElementById("questionnr").innerHTML = `Pytanie ${qnr+1} z ${q.length}`;
}

function question(option) {
	q[qnr].effect(option);
	if (qnr==q.length-1) results();
	else {
		qnr++;
		document.querySelector(".back").disabled=false;
		display(qnr);
	}
}

function previous() {
	qnr--;
	a1-=arecent;
	b1-=brecent;
	c1-=crecent;
	d1-=drecent;
	e1-=erecent;
	f1-=frecent;
	g1-=grecent;
	h1-=hrecent;
	display(qnr);
	document.querySelector(".back").disabled=true;
}

function results() {
	a1=a1.toFixed(1);
	const a2=(100-a1).toFixed(1);
	b1=b1.toFixed(1);
	const b2=(100-b1).toFixed(1);
	c1=c1.toFixed(1);
	const c2=(100-c1).toFixed(1);
	d1=d1.toFixed(1);
	const d2=(100-d1).toFixed(1);
	e1=e1.toFixed(1);
	const e2=(100-e1).toFixed(1);
	f1=f1.toFixed(1);
	const f2=(100-f1).toFixed(1);
	g1=g1.toFixed(1);
	const g2=(100-g1).toFixed(1);
	h1=h1.toFixed(1);
	const h2=(100-h1).toFixed(1);
	i1=i1.toFixed(1);
	const i2=(100-i1).toFixed(1);
	
	document.getElementById("container").innerHTML = `<div class="results">
	<div class="col">
	
	<p><span class="l">Indywidualizm</span><span class="r">Holizm</span></p>
	<div class="lbar ind" style="width: ${a1}%"><span class="ltext a1t">${a1}%</span></div><div class="rbar kom" style="width: ${a2}%"><span class="rtext a2t">${a2}%</span></div>
	
	<p><span class="l">Egalitaryzm</span><span class="r">Elitaryzm</span></p>
	<div class="lbar ega" style="width: ${b1}%"><span class="ltext b1t">${b1}%</span></div><div class="rbar eli" style="width: ${b2}%"><span class="rtext b2t">${b2}%</span></div>
	
	<p><span class="l">Uniwersalizm</span><span class="r">Pluriwersalizm</span></p>
	<div class="lbar uni" style="width: ${c1}%"><span class="ltext c1t">${c1}%</span></div><div class="rbar dyf" style="width: ${c2}%"><span class="rtext c2t">${c2}%</span></div>
	
	<p><span class="l">Nacjonalizm</span><span class="r">Antynacjonalizm</span></p>
	<div class="lbar nac" style="width: ${d1}%"><span class="ltext d1t">${d1}%</span></div><div class="rbar ana" style="width: ${d2}%"><span class="rtext d2t">${d2}%</span></div>
	
	</div>
	<div class="col">
	
	<p><span class="l">Progresywizm</span><span class="r">Tradycjonalizm</span></p>
	<div class="lbar pro" style="width: ${e1}%"><span class="ltext e1t">${e1}%</span></div><div class="rbar tra" style="width: ${e2}%"><span class="rtext e2t">${e2}%</span></div>
	
	<p><span class="l">Materializm hist.</span><span class="r">Idealizm hist.</span></p>
	<div class="lbar mat" style="width: ${f1}%"><span class="ltext f1t">${f1}%</span></div><div class="rbar ide" style="width: ${f2}%"><span class="rtext f2t">${f2}%</span></div>
	
	<p><span class="l">Antropocentryzm</span><span class="r">Ekocentryzm</span></p>
	<div class="lbar ant" style="width: ${g1}%"><span class="ltext g1t">${g1}%</span></div><div class="rbar eko" style="width: ${g2}%"><span class="rtext g2t">${g2}%</span></div>
	
	<p><span class="l">Technoakceleracjonizm</span><span class="r">Antytechnologizm</span></p>
	<div class="lbar tec" style="width: ${h1}%"><span class="ltext h1t">${h1}%</span></div><div class="rbar ate" style="width: ${h2}%"><span class="rtext h2t">${h2}%</span></div>
	
	</div>
	</div>
	
	<div class="feedback"><a href="https://forms.gle/xMVhfNjwiojNoQaR7">Zostaw opinię</a></div>`;
	
	if (a1<18) document.querySelector(".a1t").style.visibility = "hidden";
	if (a2<18) document.querySelector(".a2t").style.visibility = "hidden";
	if (b1<18) document.querySelector(".b1t").style.visibility = "hidden";
	if (b2<18) document.querySelector(".b2t").style.visibility = "hidden";
	if (c1<18) document.querySelector(".c1t").style.visibility = "hidden";
	if (c2<18) document.querySelector(".c2t").style.visibility = "hidden";
	if (d1<18) document.querySelector(".d1t").style.visibility = "hidden";
	if (d2<18) document.querySelector(".d2t").style.visibility = "hidden";
	if (e1<18) document.querySelector(".e1t").style.visibility = "hidden";
	if (e2<18) document.querySelector(".e2t").style.visibility = "hidden";
	if (f1<18) document.querySelector(".f1t").style.visibility = "hidden";
	if (f2<18) document.querySelector(".f2t").style.visibility = "hidden";
	if (g1<18) document.querySelector(".g1t").style.visibility = "hidden";
	if (g2<18) document.querySelector(".g2t").style.visibility = "hidden";
	if (h1<18) document.querySelector(".h1t").style.visibility = "hidden";
	if (h2<18) document.querySelector(".h2t").style.visibility = "hidden";
}