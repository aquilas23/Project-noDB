
var scripts = [ 

	{id: 1, title: 'PEACE', quote: ' Numbers 6:26 "The LORD lift up His countenance upon you, and give you peace. " '},

	{id: 2, title: 'PEACE', quote: ' Psalm 4:8 “I will both lie down in peace, and sleep; for You alone, O LORD, make me dwell in safety.” '},

	{id: 3, title: 'PEACE', quote: ' Numbers 6:26 "The LORD lift up His countenance upon you, and give you peace. " '},

	{id: 4, title: 'PEACE', quote: 'Psalm 55:18 “He has redeemed my soul in peace from the battle that was against me, for there were many against me.” '},

	{id: 5, title: 'PEACE', quote: ' Psalm 85:10 “Mercy and truth have met together; righteousness and peace have kissed.” '},

	{id: 6, title: 'HOPE', quote: ' Jeremiah 29:11 " For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope." '},

	{id: 7, title: 'HOPE', quote: ' Romans 15:13 "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope." '},

	{id: 8, title: 'HOPE', quote: ' Romans 12:12 "Rejoice in hope, be patient in tribulation, be constant in prayer." '},

	{id: 9, title: 'HOPE', quote: ' Hebrews 11:1  "Now faith is the assurance of things hoped for, the conviction of things not seen." '},

	{id: 10, title: 'HOPE', quote: ' Proverbs 23:18 "Surely there is a future, and your hope will not be cut off." '},

	{id: 11, title: 'HOPE', quote: ' Psalm 71:5 "For you, O Lord, are my hope, my trust, O Lord, from my youth." '}, 

	{id: 12, title: 'HOPE', quote: ' Lamentations 3:24 “The Lord is my portion,” says my soul, “therefore I will hope in him.” '},
	
	];


module.exports={

    getScripts:(req, res) => {
        res.status(200).send(scripts);
    },

    getSingleScript: (req,res) => {
    var script= scripts.find(e => e.id === +req.params.id);
    res.status(200).send(script);
    },

    addScript: (req,res)=> {
        console.log(req.body)
        var newScript ={
            id: scripts[scripts.length-1].id +1,
            title: req.body.newScriptTitle,
            quote:req.body.newScript
        }

        scripts.push (newScript);
        res.status(200).send(newScript);
    },

updateScript: (req,res)=> {
    console.log(req.params)
    console.log(req.body)
    var script=scripts.find (e=> e.id ===+req.params.id);
    script.title=req.body.title;
    res.status(200).send(scripts);

},

deleteScript: (req,res) => {
    console.log(req.params)
    var index=scripts.findIndex(e=> e.id ===+req.params.id);    
    scripts.slice(index, 1);

}
}