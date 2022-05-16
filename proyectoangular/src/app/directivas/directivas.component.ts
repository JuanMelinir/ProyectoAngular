import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
ensaladas=[
{nombre:"Caesar",
descripcion:"Lechuga, dados de queso parmesano, trozos de pollo, vinagre de manzana, salsa perrins, aceite de oliva, limón, pan frito y yema de huevo.",
precio:900,
src:"../assets/ensaladacesar.png",
carne:true},
{nombre:"Griega",
descripcion:"Tomate, pepino, cebolla, pimiento, aceite de oliva, aceitunas negras, dados de queso.",
precio:800,
src:"../assets/ensaladagriega.png",
carne:false},
{nombre:"Mediterranea",
descripcion:"Tomate, albahaca, orégano, ajo picado, vinagre balsámico, aceitunas negras, cebolla de verdeo y dados de queso.",
precio:800,
src:"../assets/ensaladamediterranea.png",
carne:false},
{nombre:"Cobb",
descripcion:"Lechuga, tomates cherry, tofu, soja, garbanzos, ajo, pimentón, aceite de oliva, palta, queso roquefort y huevo.",
precio:1000,
src:"../assets/ensaladacobb.png",
carne:false},
{nombre:"Atún",
descripcion:"Tomate, pepino, cebolla, pimiento, aceite de oliva, aceitunas negras, dados de queso.",
precio:800,
src:"../assets/ensaladaatun.png",
carne:true},
{nombre:"Lomito de res",
descripcion:"Trozos de lomo, champiñones, lechuga, tomate, esparrago, pepino, limón, mostaza, aceite de oliva, azúcar y pimienta.",
precio:900,
src:"../assets/ensaladalomitores.png",
carne:true},
{nombre:"Solomillo de cerdo",
descripcion:"Trozos de solomillo de cerdo, palta, cebolla, arvejas, semillas de sésamo, chauchas y pimienta negra.",
precio:900,
src:"../assets/ensaladasolomillocerdo.png",
carne:true},
{nombre:"Taco de res",
descripcion:"Trozos de carne de res, palta, tomates cherry, cebolla morada, granos de choclo, ají dulce verde, lechuga, cilantro, limón y  aceite de oliva.",
precio:900,
src:"../assets/ensaladataco.png",
carne:true}
]
  constructor() { }

  ngOnInit(): void {
  }

}
