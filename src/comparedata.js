// compare product data js
const prods = [
    {
      prodId: 1,
      prodName: 'Triple Inverter',
      skuNumber: 'HSU-18HFCF/013USDC (W)',
      prodPrice: '122,999.00',
      ProdBrand: 'Haier',
      prodDesc:
        'Anti Corrosion 100%copper Wide Voltage With Hyper PCB Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
        prodImg: "img/Haier_image_3-.png"
    },
    {
      prodId: 2,
      prodName: 'Aura X 1.5 Ton Inverter Split AC',
      skuNumber: 'DSU-18HFMCC/013WUSDC (W)',
      prodPrice: '122,999.00',
      ProdBrand: 'Dawlance',
      prodDesc:
        'AC Inverter Mono Split Cooling Capacity 18000 BTU/h Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
        prodImg: "img/dawlance_iamge_4.png"
    },
    {
        prodId: 3,
        prodName: '1 Ton Ultron SUPER eComfort Mirror Black DC Inverter',
        skuNumber: 'OSU-18HFCP/013USDC (W)',
        prodPrice: '151,000.00',
        ProdBrand: 'Orient',
        prodDesc:
          '100 % Pure copperLow voltage operation 70V Auto Clean Sterilization System With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/orient_image_3- (1).png"
      },
      {
        prodId: 4,
        prodName: 'ELITE Series Inverter',
        skuNumber: 'TSU-18HFCF/013USDC (W)',
        prodPrice: '111,999.00',
        ProdBrand: 'TCL',
        prodDesc:
         'Air flow control Full BTU in high temperatureOne touch self cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/tcl_image_2.png"
      },
      {
        prodId: 5,
        prodName: 'Gree Bee Series Split AC',
        skuNumber: 'GSU-18HFCF/013USDC (W)',
        prodPrice: ' 105,300.00',
        ProdBrand: 'GREE',
        prodDesc:
         'Low Voltage Startup Copper Tube (Condenser & Evaporator) Self diagnosis With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/gree_image_4- (1).png"
      },
      {
        prodId: 6,
        prodName: 'Puri Inverter',
        skuNumber: 'HSU-18HJ/012USDC(G)',
        prodPrice: '174,900.00',
        ProdBrand: 'Haier',
        prodDesc:
         'Air Purification Wide Voltage Range With Hyper PCB Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/haier_image_1- (1).png"
      },
      {
        prodId: 7,
        prodName: 'Thunder Inverter',
        skuNumber: 'HSU-12HFTCD/WSDC(S)-T3',
        prodPrice: '122,999.00',
        ProdBrand: 'Haier',
        prodDesc:
         'T3 Ultra Big Outdoor Upto 52°C Full BTU Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/haier_image_2 (1).png"
      },
      {
        prodId: 8,
        prodName: 'Elegance Pro 1 Ton Inverter Split AC',
        skuNumber: 'DSU-18HFMCC/013WUSDC (W',
        prodPrice: '157,988.00',
        ProdBrand: 'Dawlance',
        prodDesc:
         'AC Inverter Mono Split Cooling Capacity 18000 BTU/h Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/dawlance_iamge_1 (1).png"
      },
      {
        prodId: 9,
        prodName: '1.5 Ton Ultron KING eComfort Silk White DC Inverter',
        skuNumber: 'OSU-18HFCP/013USDC (W)',
        prodPrice: '172,000.00',
        ProdBrand: 'Orient',
        prodDesc:
         '100 % Pure copper Low voltage operation 70V Auto Clean Sterilization System With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/orient_image_1 (1).png"
      },
      {
        prodId: 10,
        prodName: 'Floor Standing T3 DC Inverter',
        skuNumber: 'TSU-18HFCF/013USDC (W)',
        prodPrice: '123,999.00',
        ProdBrand: 'TCL',
        prodDesc:
         '7 Air flow control Full BTU in high temperature One touch self cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/tcl_image_1 (1).png"
      },
      {
        prodId: 11,
        prodName: 'Gree Inverter AC 2 Ton',
        skuNumber: 'GSU-18HFCF/013USDC (W)',
        prodPrice: '254,900.00',
        ProdBrand: 'GREE',
        prodDesc:
         'Low Voltage Startup Copper Tube (Condenser & Evaporator) Self diagnosis With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/gree_image_1 (1).png"
      },
      {
        prodId: 12,
        prodName: 'Puri Inverter',
        skuNumber: 'HSU-18HJ/012USDC(G)',
        prodPrice: '174,900.00',
        ProdBrand: 'Haier',
        prodDesc:
         'Air Purification Wide Voltage Range With Hyper PCB Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/haier_image_4 (1).png"
      },
      {
        prodId: 13,
        prodName: 'Pearl Inverter',
        skuNumber: 'HSU-18HFCF/013USDC (W)',
        prodPrice: '160,000.00',
        ProdBrand: 'Haier',
        prodDesc:
         'Anti Corrosion 100%copper Wide Voltage With Hyper PCB Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/haier_image_5_copy_1 (2).png"
      },
      {
        prodId: 14,
        prodName: 'Dawlance Inverter Split AC Chrome Pro 30 WB 1.5 Ton',
        skuNumber: 'DSU-18HFMCC/013WUSDC (W)',
        prodPrice: '164,000.00',
        ProdBrand: 'Dawlance',
        prodDesc:
         'AC Inverter Mono Split Cooling Capacity 18000 BTU/h Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/dawlance_image_2_copy_1 (1).png"
      },
      {
        prodId: 15,
        prodName: '1.5 Ton Ultron LUNAR eComfort Grace Golden DC Inverter',
        skuNumber: 'OSU-18HFCP/013USDC (W)',
        prodPrice: '172,000.00',
        ProdBrand: 'Orient',
        prodDesc:
         '100 % Pure copper Low voltage operation 70V Auto Clean Sterilization System With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/orient_image_2_copy_1 (2).png"
      },
      {
        prodId: 16,
        prodName: 'TAC-Pro Series Inverter',
        skuNumber: 'TSU-18HFCF/013USDC (W)',
        prodPrice: '121,999.00',
        ProdBrand: 'TCL',
        prodDesc:
         '7 Air flow control Full BTU in high temperature One touch self cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/tcl_image_3.png"
      },
      {
        prodId: 17,
        prodName: 'Gree Viola Series Air Conditioner',
        skuNumber: 'GSU-18HFCF/013USDC (W)',
        prodPrice: '110,300.00',
        ProdBrand: 'GREE',
        prodDesc:
         'Low Voltage Startup Copper Tube (Condenser & Evaporator) Self diagnosis With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/gree_image_2 (1).png"
      },
      {
        prodId: 18,
        prodName: 'Duzin Inverter',
        skuNumber: 'HSU-18HJ/012USDC(G)',
        prodPrice: '180,900.00',
        ProdBrand: 'Haier',
        prodDesc:
         'Vertical Air Flow Wide Voltage Range With Hyper PCB Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/haier_image_6-removebg-preview.png"
      }, 
      {
        prodId: 19,
        prodName: 'Frost 1.5 Ton Cool Only Inverter Split AC',
        skuNumber: 'DSU-18HFCF/013USDC (W)',
        prodPrice: '122,999.00',
        ProdBrand: 'Dawlance',
        prodDesc:
         'Anti Corrosion 100%copper Wide Voltage With Hyper PCB Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/dawlance_image_3.png"
      }, 
      {
        prodId: 20,
        prodName: 'Sprinter X 1 Ton Inverter Split AC',
        skuNumber: 'DSU-18HFMCC/013WUSDC (W)',
        prodPrice: ' 185,300.00',
        ProdBrand: 'Dawlance',
        prodDesc:
         'AC Inverter Mono Split Cooling Capacity 18000 BTU/h Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/dawlance_image_5 (1).png"
      }, 
      {
        prodId: 21,
        prodName: '1 Ton Ultron EVA eComfort Metallic Silver DC Inverter',
        skuNumber: 'OSU-18HFCP/013USDC (W)',
        prodPrice: ' 160,000.00',
        ProdBrand: 'Orient',
        prodDesc:
         '100 % Pure copper Low voltage operation 70V Auto Clean Sterilization System With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/orient_image_4-removebg-preview.png"
      }, 
      {
        prodId: 22,
        prodName: 'Miracle Series Inverter',
        skuNumber: 'TSU-18HFCF/013USDC (W)',
        prodPrice: '131,999.00',
        ProdBrand: 'TCL',
        prodDesc:
         '7 Air flow control Full BTU in high temperature One touch self cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/tcl_image_4.png"
      },
      {
        prodId: 23,
        prodName: 'Gree Silent King Series Split Air Conditioner',
        skuNumber: 'GSU-18HFCF/013USDC (W)',
        prodPrice: '134,300.00',
        ProdBrand: 'GREE',
        prodDesc:
         'Low Voltage Startup Copper Tube (Condenser & Evaporator) Self diagnosis With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/gree_iamge_3.png"
      },
      {
        prodId: 24,
        prodName: 'TAC-T5 Inverter',
        skuNumber: 'TSU-18HFCF/013USDC (W)',
        prodPrice: ' 104,900.00',
        ProdBrand: 'TCL',
        prodDesc:
         '7 Air flow control Full BTU in high temperature One touch self cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/tcl_image_5.png"
      },
      {
        prodId: 25,
        prodName: 'Gallant 2 Ton Inverter Floor Standing AC',
        skuNumber: 'DSU-18HFMCC/013WUSDC (W)',
        prodPrice: ' 155,999.00',
        ProdBrand: 'Dawlance',
        prodDesc:
         'AC Inverter Mono Split Cooling Capacity 18000 BTU/h Self Cleaning With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/dawlance_image_6-removebg-preview.png"
      }, 
      {
        prodId: 26,
        prodName: '1 Ton Ultron SUPER eComfort Mirror Black DC Inverter',
        skuNumber: 'OSU-18HFCP/013USDC (W)',
        prodPrice: '150,300.00',
        ProdBrand: 'Orient',
        prodDesc:
         'AC Inverter Mono Split Cooling Capacity 18000 BTU/h Auto Clean Sterilization System With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/orient_iamge_5.png"
      }, 
      {
        prodId: 27,
        prodName: 'Gree Lomo Mirror Inverter 1.0 Ton Air Conditioner',
        skuNumber: 'GSU-18HFCF/013USDC (W)',
        prodPrice: ' 141,000.00',
        ProdBrand: 'GREE',
        prodDesc:
         'Low Voltage Startup Copper Tube (Condenser & Evaporator) Self diagnosis With adoption of optimized cooling system, the cooling capacity of Haier Air Conditioners still could catch up 100% to provide the best cooling experience to user at 46◦C high temperature.',
          prodImg: "img/gree_iamge_5 (1).png"
      },
  ];