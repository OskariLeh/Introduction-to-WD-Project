let currentDecile = 10
let map

let query = {
  "query": [
    {
      "code": "Vuosi",
      "selection": {
        "filter": "item",
        "values": [
          "2021"
        ]
      }
    },
    {
      "code": "Tulokymmenys",
      "selection": {
        "filter": "item",
        "values": [
          "10"
        ]
      }
    },
    {
      "code": "Kunta",
      "selection": {
        "filter": "item",
        "values": [
          "SSS",
          "KU049",
          "KU091",
          "KU106",
          "KU186",
          "KU224",
          "KU235",
          "KU245",
          "KU257",
          "KU444",
          "KU505",
          "KU543",
          "KU611",
          "KU753",
          "KU755",
          "KU858",
          "KU092",
          "KU927",
          "KU407",
          "KU434",
          "KU018",
          "KU504",
          "KU638",
          "KU616",
          "KU078",
          "KU149",
          "KU710",
          "KU019",
          "KU284",
          "KU430",
          "KU480",
          "KU561",
          "KU636",
          "KU734",
          "KU761",
          "KU202",
          "KU423",
          "KU481",
          "KU503",
          "KU529",
          "KU538",
          "KU577",
          "KU680",
          "KU704",
          "KU738",
          "KU853",
          "KU304",
          "KU400",
          "KU631",
          "KU833",
          "KU895",
          "KU918",
          "KU322",
          "KU445",
          "KU061",
          "KU103",
          "KU169",
          "KU834",
          "KU981",
          "KU082",
          "KU109",
          "KU165",
          "KU086",
          "KU433",
          "KU694",
          "KU016",
          "KU081",
          "KU111",
          "KU098",
          "KU316",
          "KU398",
          "KU560",
          "KU576",
          "KU781",
          "KU075",
          "KU285",
          "KU489",
          "KU624",
          "KU935",
          "KU142",
          "KU286",
          "KU153",
          "KU580",
          "KU689",
          "KU700",
          "KU405",
          "KU416",
          "KU441",
          "KU739",
          "KU831",
          "KU181",
          "KU214",
          "KU230",
          "KU747",
          "KU079",
          "KU102",
          "KU271",
          "KU484",
          "KU531",
          "KU608",
          "KU609",
          "KU886",
          "KU050",
          "KU051",
          "KU684",
          "KU783",
          "KU020",
          "KU887",
          "KU908",
          "KU619",
          "KU790",
          "KU143",
          "KU250",
          "KU581",
          "KU108",
          "KU211",
          "KU418",
          "KU536",
          "KU562",
          "KU604",
          "KU635",
          "KU837",
          "KU922",
          "KU980",
          "KU177",
          "KU508",
          "KU702",
          "KU936",
          "KU172",
          "KU435",
          "KU077",
          "KU179",
          "KU410",
          "KU500",
          "KU592",
          "KU850",
          "KU892",
          "KU182",
          "KU291",
          "KU249",
          "KU495",
          "KU216",
          "KU226",
          "KU256",
          "KU265",
          "KU312",
          "KU601",
          "KU729",
          "KU931",
          "KU275",
          "KU992",
          "KU005",
          "KU052",
          "KU403",
          "KU759",
          "KU934",
          "KU010",
          "KU300",
          "KU989",
          "KU145",
          "KU233",
          "KU301",
          "KU408",
          "KU743",
          "KU151",
          "KU218",
          "KU232",
          "KU846",
          "KU288",
          "KU440",
          "KU599",
          "KU598",
          "KU893",
          "KU152",
          "KU399",
          "KU231",
          "KU287",
          "KU545",
          "KU280",
          "KU475",
          "KU499",
          "KU905",
          "KU946",
          "KU097",
          "KU213",
          "KU491",
          "KU507",
          "KU588",
          "KU623",
          "KU171",
          "KU178",
          "KU593",
          "KU046",
          "KU090",
          "KU681",
          "KU740",
          "KU768",
          "KU204",
          "KU687",
          "KU857",
          "KU297",
          "KU749",
          "KU686",
          "KU778",
          "KU844",
          "KU921",
          "KU420",
          "KU915",
          "KU140",
          "KU239",
          "KU263",
          "KU402",
          "KU595",
          "KU762",
          "KU925",
          "KU146",
          "KU167",
          "KU176",
          "KU276",
          "KU426",
          "KU309",
          "KU607",
          "KU260",
          "KU707",
          "KU848",
          "KU422",
          "KU541",
          "KU074",
          "KU236",
          "KU421",
          "KU584",
          "KU849",
          "KU924",
          "KU217",
          "KU272",
          "KU071",
          "KU630",
          "KU791",
          "KU305",
          "KU832",
          "KU069",
          "KU317",
          "KU535",
          "KU626",
          "KU691",
          "KU072",
          "KU244",
          "KU425",
          "KU436",
          "KU494",
          "KU564",
          "KU859",
          "KU139",
          "KU615",
          "KU889",
          "KU785",
          "KU625",
          "KU678",
          "KU748",
          "KU009",
          "KU208",
          "KU483",
          "KU563",
          "KU746",
          "KU977",
          "KU205",
          "KU578",
          "KU697",
          "KU765",
          "KU105",
          "KU290",
          "KU620",
          "KU777",
          "KU320",
          "KU583",
          "KU614",
          "KU732",
          "KU742",
          "KU240",
          "KU241",
          "KU751",
          "KU845",
          "KU851",
          "KU148",
          "KU758",
          "KU890",
          "KU683",
          "KU698",
          "KU854",
          "KU976",
          "KU047",
          "KU261",
          "KU273",
          "KU498",
          "KU478",
          "KU043",
          "KU060",
          "KU065",
          "KU076",
          "KU170",
          "KU417",
          "KU438",
          "KU736",
          "KU771",
          "KU035",
          "KU062",
          "KU295",
          "KU318",
          "KU766",
          "KU941"
        ]
      }
    },
    {
      "code": "Tiedot",
      "selection": {
        "filter": "item",
        "values": [
          "deslkm_os"
        ]
      }
    }
  ],
  "response": {
    "format": "json-stat2"
  }
}

const radioInput = document.querySelectorAll("input")
radioInput[9].checked = true
const updateButton = document.getElementById("update-map")
const downloadButton = document.getElementById("download-button")


// Clicking the button changes the Post query and initilizes the map again with new data
updateButton.addEventListener("click", () => {
  
  for (let index = 0; index < radioInput.length; index++) {
    if (radioInput[index].checked) {
      currentDecile = index + 1
      query.query[1].selection.values[0] = currentDecile
      chartQuery.query[1].selection.values[0] = currentDecile
      break
    }
  }
  
  getData()
  
})

// Uses Leaflet.image plugin to doownload an image of the map
downloadButton.addEventListener("click", () => {
  leafletImage(map, function(err, canvas) {
    let a = document.createElement('a');
    let dimensions = map.getSize();
    a.x = dimensions.x
    a.y = dimensions

    a.href= canvas.toDataURL();
    a.download = "map.png"
    a.click()
    a.remove()
  })
})


// Get data from API, init map
const getData = async () => {

  // GeoJSON data
  const mapUrl = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326 "
  const mapResult = await fetch(mapUrl)
  const mapData = await mapResult.json()

  // Income data
  const url = "https://pxdata.stat.fi:443/PxWeb/api/v1/en/StatFin/tjt/statfin_tjt_pxt_12hh.px"
  const response = await fetch(url, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(query)
  })

  if (!response.ok) {
      return
  }
  data = await response.json()

  mapData.features.forEach(feature => {
    kuntaID = "KU" + feature.properties.kunta

    index = data.dimension.Kunta.category.index[kuntaID]
    feature.properties.percentageOfGivenDecile = data.value[index]
  });


  initMap(mapData)
}

const initMap = (data) => {

  if (map != undefined) {
    map.remove()
    map = undefined
    map = L.map("map", {
      preferCanvas: true
    })
  } else {
    map = L.map("map", {
      preferCanvas: true
    })
  }


  let geoJSON = L.geoJSON(data, {
    weight:2,
    onEachFeature:getFeature,
    style:getStyle
  }).addTo(map)

  let bounds = geoJSON.getBounds()
  map.fitBounds(bounds)


  let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: -3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
}

const getFeature = (feature, layer) =>{
  layer.bindTooltip(
    `<ul>
        <h3>${feature.properties.name}</h3>
        <p>Percentage of people belonging to decile ${currentDecile}: ${feature.properties.percentageOfGivenDecile}%</p>
        <p>Click to see development</p>
    </ul>`)
  layer.on({
    click: layerClicked
  })
}

// Set color of municipalities, smaller percentage green higher red
const getStyle = (feature) => {
  let hue = 120-feature.properties.percentageOfGivenDecile**2
  if (hue < 0){
      hue = 0
  }

  return {
      color: `hsl(${hue}, 75%, 50%)`
  }
}



getData()