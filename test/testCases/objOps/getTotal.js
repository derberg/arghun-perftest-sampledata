'use strict';

const helpers = require('../../../src/helpers');
const assert = require('assert');
const arghun = require('../../../');
const expectedCount = 101;
const expectedNames = [ 'Acros-Krik.txt',
     'AdmiralGialAckbar.html',
     'Ak-Rev.xml',
     'Almec.json',
     'AskAak.json',
     'MasAmedda.html',
     'StassAllie.raml',
     'Amee.html',
     'BailAntilles.js',
     'CassianAndor.js',
     'Padme-Amidala.css',
     'RaymusAntilles.html',
     'WedgeAntilles.doc',
     '.AZI-3',
     'CommanderAppo.html',
     'FaroArgyus.js',
     'PasselArgente.css',
     'QueenApailana.html',
     'SetiAshgad.json',
     'BanaBreemu.txt',
     'CadBane.html',
     'KitsterBanai.html',
     'LuxBonteri.html',
     'MoradminBast.html',
     'PondaBaba.html',
     'JarJarBinks.xml',
     'Sora-Bulq.html',
     'Beed.doc',
     'EzraBridger.html',
     'SharaBey.js',
     'MinaBonteri.js',
     'TheBendu.html',
     'BorvotheHutt.css',
     'Bossk.js',
     'Depa-Billable.json',
     'SioBibble.js',
     'BB-8.css',
     'ArvelCrynyd.doc',
     'C1-10P.html',
     'Corde.js',
     'Lando-Calrissian.css',
     'Ransolm-Casterfo.html',
     'SalaciousBCrumb.js',
     'CaptainJeremochColton.html',
     'CommanderCody.html',
     'KaydelKoConnix.js',
     'RushClovis.js',
     'C-3PO.html',
     'Chewbacca.html',
     'BiggsDarklighter.less',
     'Cin-Drallig.css',
     'FigrinD\'an.html',
     'Ima-GunDi.html',
     'JocladDanva.css',
     'KesDameron.js',
     'LokDurd.css',
     'CloneTrooperDogma.html',
     'DaultayDofine.html',
     'Droidbait.css',
     'JanDodonna.html',
     'LottDod.html',
     'RinnrivinDi.html',
     'BrenDerlin.html',
     'Count-Dooku.js',
     'Dengar.html',
     'Dorme.html',
     'GeneralOroDassyne.html',
     'GizorDellso.sass',
     'PoeDameron.js',
     'Doctor Cornelius Evazan.html',
     'EV-9D9.html',
     'EbeEEndocott.html',
     'Eirtae.html',
     'Elle.html',
     'Embo.html',
     'Emperor\'sRoyalGuards.html',
     'Galen Erso.html',
     'JasEmari.html',
     'Jyn Erso.html',
     'LyraErso.html',
     'Morallo Eval.html',
     'Boba Fett.html',
     'Commander Fil.html',
     'Feral.html',
     'Jango Fett.js',
     'Onaconda Farr.html',
     'Clone Trooper Fives.html',
     'FN-2199.html',
     'Fode.js',
     'Kit Fisto.html',
     'Bib Fortuna.html',
     'Commander Fox.html',
     'FX-7.html',
     'Finn.js',
     'Adi Gallia.js',
     'Commander Gree.raml',
     'Gardulla the Hutt.html',
     'Garindan.less',
     'Gonk droid.html',
     'Saw Gerrera.raml',
     'Yarna d\'al\' Gargan.js' ];

function getTotalCount(obj) {

  try {

    const result = arghun.getTotal(obj);
    assert.equal(result, expectedCount, 'getTotal failed with counting');
    helpers.log('getTotal with counting - successful');
  }

  catch(err) {

    helpers.log(err);
    throw new Error(err);
  }
}

function getTotalNames(obj) {

  try {

    const result = arghun.getTotal(obj);
    assert.deepEqual(result, expectedNames, 'getTotal failed with names');
    helpers.log('getTotal with names - successful');
  }

  catch(err) {

    helpers.log(err);
    throw new Error(err);
  }
}

const getTotalTests = {
  getTotalCount,
  getTotalNames
};

module.exports = getTotalTests;
