(function () {    
  if (window.showNavigation1 || window.showNavigation2) return;    
  if (document.getElementById('immersive-canvas-nav1')) return;    
    
  var FLOORS = [    
    {    
      id: 'floor-g-entrance',    
      title: 'GROUND FLOOR ENTRANCE',    
      levelLabel: 'Ground',    
      levelName: 'Entrance',    
      shortTitle: 'GE',    
      panoramaName: 'ground_floor_entrance_undressed',    
      panoramaNameFurnished: 'ground_floor_entrance_dressed',    
      panoramaNameUnfurnished: 'ground_floor_entrance_undressed',    
      searchKeywords: 'entrance, lobby, ground entrance, mall entrance, arrival, foyer',    
      leasing: {    
        availableUnits: 6,    
        occupancyPct: 95,    
        retailAreaSqm: 5210,    
        avgUnitSqm: 118    
      }    
    },    
    {    
      id: 'floor-g',    
      title: 'GROUND LUXURY ATRIUM',    
      levelLabel: 'Ground',    
      levelName: 'Luxury Atrium',    
      shortTitle: 'G',    
      panoramaName: 'ground_floor_undressed',    
      panoramaNameFurnished: 'ground_floor_dressed',    
      panoramaNameUnfurnished: 'ground_floor_undressed',    
      searchKeywords: 'home furniture, furnishings, home decor, home decoration, home living, living room, bedroom, dining room, kitchen, bathroom, office furniture, outdoor furniture, patio furniture, modern furniture, contemporary furniture, luxury furniture, affordable furniture, minimalist furniture, Scandinavian furniture, industrial furniture, wooden furniture, custom furniture, designer furniture, sofas, couches, loveseats, recliners, armchairs, coffee tables, side tables, console tables, TV stands, entertainment centers, dining tables, dining chairs, bar stools, beds, bed frames, mattresses, wardrobes, dressers, nightstands, cabinets, shelves, bookcases, storage solutions, home organization, lighting, chandeliers, pendant lights, ceiling lights, floor lamps, table lamps, wall sconces, rugs, carpets, curtains, blinds, mirrors, wall art, canvas art, decorative accessories, vases, cushions, throw pillows, home accents, interior design, interior decorating, home styling, home essentials, furniture store, home furnishing, home accessories, home improvement, smart home, lifestyle, residential furniture, premium furniture',    
      leasing: {    
        availableUnits: 6,    
        occupancyPct: 95,    
        retailAreaSqm: 5210,    
        avgUnitSqm: 118    
      }    
    },    
    {    
      id: 'floor-l2',    
      title: '2ND FLOOR UPPER PROMENADE',    
      levelLabel: '2nd Floor',    
      levelName: 'Upper Promenade',    
      shortTitle: 'L2',    
      panoramaName: 'second_floor_undressed',    
      panoramaNameFurnished: 'second_floor_dressed',    
      panoramaNameUnfurnished: 'second_floor_undressed',    
      searchKeywords: 'sports, sportswear, athletic gear, fitness, activewear, workout clothing, gym wear, training apparel, athletic apparel, performance wear, sports clothing, running shoes, sneakers, athletic shoes, fitness equipment, gym equipment, exercise equipment, workout gear, yoga apparel, yoga mats, sports accessories, fitness accessories, outdoor sports, indoor sports, team sports, basketball, football, soccer, volleyball, tennis, badminton, golf, baseball, cycling, running, jogging, hiking, swimming, martial arts, cross training, strength training, weightlifting, cardio, home gym, fitness lifestyle, wellness, health and fitness, sports nutrition, compression wear, sports bags, water bottles, smart fitness devices, wearable fitness technology, athletic performance, endurance training, personal training, exercise, active lifestyle',    
      leasing: {    
        availableUnits: 12,    
        occupancyPct: 91,    
        retailAreaSqm: 4320,    
        avgUnitSqm: 104    
      }    
    },    
    {    
      id: 'floor-l3-view',    
      title: '3RD FLOOR VIEW',    
      levelLabel: '3rd Floor',    
      levelName: 'View',    
      shortTitle: 'L3V',    
      panoramaName: 'third_floor_view_undressed',    
      panoramaNameFurnished: 'third_floor_view_dressed',    
      panoramaNameUnfurnished: 'third_floor_view_undressed',    
      searchKeywords: 'third floor view, atrium view, overlook, fashion apparel clothing retail boutique',    
      leasing: {    
        availableUnits: 9,    
        occupancyPct: 88,    
        retailAreaSqm: 3680,    
        avgUnitSqm: 92    
      }    
    },    
    {    
      id: 'floor-l3',    
      title: '3RD FLOOR LUXURY ATRIUM',    
      levelLabel: '3rd Floor',    
      levelName: 'Luxury Atrium',    
      shortTitle: 'L3',    
      panoramaName: 'third_floor_undressed',    
      panoramaNameFurnished: 'third_floor_dressed',    
      panoramaNameUnfurnished: 'third_floor_undressed',    
      searchKeywords: 'fashion apparel clothing retail boutique',    
      leasing: {    
        availableUnits: 9,    
        occupancyPct: 88,    
        retailAreaSqm: 3680,    
        avgUnitSqm: 92    
      }    
    }    
  ];    
    
  var UNITS_DATA = {    
    'unit-102': {    
      id: 'unit-102',    
      title: 'Unit 102',    
      subTitle: 'Parklinks Mall · Commercial Level 2',    
      areaSqm: 161,    
      areaSqFt: 1733,    
      floorLabel: '2nd Floor',    
      conditionLabel: 'Bare Unit',    
      monthlyRentPhp: 120000,    
      rentPerSqmPhp: 745,    
      ceilingHeight: '4.5 m Clear',    
      powerSupply: '40A, Single Phase',    
      utilities: { water: true, gas: false },    
      benefits: [    
        'Flexible open layout',    
        'High visibility location',    
        'Ready for fit-out'    
      ],    
      facts: {    
        capacity: '40 – 60 People',    
        condition: 'Bare Shell',    
        customization: '100% Flexible'    
      },    
      blueprintOptions: [    
        {    
          id: 'sports',    
          label: 'Sports',    
          cost: 745,    
          panoramaName: 'unit1_undressed',    
          panoramaNameFurnished: 'unit1_dressed',    
          panoramaNameUnfurnished: 'unit1_undressed',    
          description: 'A highly flexible shared space tailored for hot-desking...',    
          metrics: [{ label: 'HOT DESKS', value: '60 Seats', icon: 'users' }]    
        },    
        { id: 'medical', label: 'Medical Clinic', cost: 115, disabled: true },    
        { id: 'bpo', label: 'BPO Operations', cost: 115, disabled: true },    
        { id: 'cafe', label: 'Café / F&B', cost: 165, disabled: true },    
        { id: 'fashion-retail', label: 'Fashion Retail', cost: 130, disabled: true },    
        { id: 'electronics', label: 'Electronics', cost: 130, disabled: true },    
        { id: 'kiosk', label: 'QSR Kiosk', cost: 130, disabled: true }    
      ]    
    },    
    'unit-101': {    
      id: 'unit-101',    
      title: 'Unit 101',    
      subTitle: 'Parklinks Mall · Commercial Level 3',    
      areaSqm: 147,    
      areaSqFt: 1582,    
      floorLabel: '3rd Floor',    
      conditionLabel: 'Bare Unit',    
      monthlyRentPhp: 110000,    
      rentPerSqmPhp: 748,    
      ceilingHeight: '4.5 m Clear',    
      powerSupply: '40A, Single Phase',    
      utilities: { water: true, gas: false },    
      benefits: [    
        'Efficient spatial planning',    
        'Optimal natural daylighting',    
        'Direct escalator proximity'    
      ],    
      facts: {    
        capacity: '35 – 50 People',    
        condition: 'Bare Shell',    
        customization: '100% Flexible'    
      },    
      blueprintOptions: [    
        {    
          id: 'fashion',    
          label: 'Fashion',    
          cost: 748,    
          panoramaName: 'unit2_undressed',    
          panoramaNameFurnished: 'unit2_dressed',    
          panoramaNameUnfurnished: 'unit2_undressed',    
          description: 'A modern corporate environment engineered for peak collaboration...',    
          metrics: [{ label: 'WORKSTATIONS', value: '45 Desks', icon: 'monitor' }]    
        },    
        { id: 'medical', label: 'Medical Clinic', cost: 115, disabled: true },    
        { id: 'bpo', label: 'BPO Operations', cost: 115, disabled: true },    
        { id: 'cafe', label: 'Café / F&B', cost: 165, disabled: true },    
        { id: 'fashion-retail', label: 'Fashion Retail', cost: 130, disabled: true },    
        { id: 'electronics', label: 'Electronics', cost: 130, disabled: true },    
        { id: 'kiosk', label: 'QSR Kiosk', cost: 130, disabled: true }    
      ]    
    }    
  };    
    
  const state = {    
    activeFloorId: 'floor-g',    
    activeUnitId: 'unit-102',    
    activeBlueprintId: '',    
    nav1Visible: false,    
    nav2Visible: false,    
    nav1Collapsed: true,    
    nav2Collapsed: true,    
    furnishMode: 'unfurnished',    
    floorSearchQuery: '',    
    calc: {    
      visible: false,    
      leaseTermMode: '12',    
      customMonths: 12,    
      grossSalesInput: ''    
    }    
  };    
    
  let mediaRequestId = 0;    
  let navigationInProgress = false;    
    
  function sel(id) { return document.getElementById(id); }    
  function setText(id, text) { var el = sel(id); if (el) el.textContent = text; }    
    
  function getFloor() {    
    return FLOORS.find(function (f) { return f.id === state.activeFloorId; }) || FLOORS[0];    
  }    
    
  function getActiveUnit() {    
    return UNITS_DATA[state.activeUnitId] || UNITS_DATA['unit-102'];    
  }    
    
  function getUnitBlueprintOptions(unit) {    
    return (unit && unit.blueprintOptions) || [];    
  }    
    
  function getBlueprintOptionById(unit, optionId) {    
    return getUnitBlueprintOptions(unit).find(function (opt) { return opt.id === optionId; });    
  }    
    
  function getActiveBlueprintOption() {    
    var unit = getActiveUnit();    
    return getBlueprintOptionById(unit, state.activeBlueprintId) || null;    
  }    
    
  function getBlueprintPanoramaForMode(option, mode) {    
    if (!option) return '';    
    if (mode === 'furnished') return option.panoramaNameFurnished || option.panoramaName || '';    
    return option.panoramaNameUnfurnished || option.panoramaName || '';    
  }    
    
  function hasActiveBlueprint() {    
    return !!getActiveBlueprintOption();    
  }    
    
  function goToBlueprintOptionPanorama(option, immediate) {    
    if (!option) return;    
    var targetPanorama = getBlueprintPanoramaForMode(option, state.furnishMode);    
    if (!targetPanorama) return;    
    var savedViewState = getViewState();    
    goToPanoramaSameSpot(targetPanorama, savedViewState);    
  }    
    
  function setActiveUnitForFloorId(floorId) {    
    if (floorId === 'floor-l2') state.activeUnitId = 'unit-102';    
    else if (floorId === 'floor-l3') state.activeUnitId = 'unit-101';    
    state.activeBlueprintId = '';    
  }    
    
  function getUnitForFloor(floor) {    
    if (!floor) return null;    
    if (floor.id === 'floor-l2') return UNITS_DATA['unit-102'];    
    if (floor.id === 'floor-l3') return UNITS_DATA['unit-101'];    
    return null;    
  }    
    
  function getPlayer() {    
    var tourRoot = getTourRoot();    
    return window.player || window.vtour || (tourRoot && tourRoot.locManager && tourRoot.locManager.rootPlayer) || (tourRoot && tourRoot.player) || null;    
  }    
    
  function getLocManager() {    
    var tourRoot = getTourRoot();    
    return (tourRoot && tourRoot.locManager) || null;    
  }    
    
  function refreshPlayer(player) {    
    if (!player) return;    
    try { player.drawScene && player.drawScene(); } catch (e) {}    
    try { player.render && player.render(); } catch (e) {}    
    try { player.update && player.update(); } catch (e) {}    
  }    
    
  /* ══════════════════════════════════════════════════════════════    
     CANONICAL CAMERA STATE — exportTourState / importTourState    
     3DVista serializes the live camera (pano + yaw + pitch + fov)    
     into a URL-hash-shaped object. This is the only stable, public    
     way to read/write camera state — everything else (player.camera,    
     setPan/getYaw, etc.) is internal/minified and unreliable.    
     ══════════════════════════════════════════════════════════════ */    
    
  var _tourStateAPICache = null;    
    
  function findTourStateAPI() {    
    if (_tourStateAPICache &&    
        typeof _tourStateAPICache.exportTourState === 'function' &&    
        typeof _tourStateAPICache.importTourState === 'function') {    
      return _tourStateAPICache;    
    }    
    var tourRoot = getTourRoot();    
    var player = getPlayer();    
    var candidates = [    
      window,    
      tourRoot,    
      player,    
      window.TDV && window.TDV.Tour,    
      window.TDV,    
      window.tour    
    ];    
    for (var i = 0; i < candidates.length; i++) {    
      var c = candidates[i];    
      if (c && typeof c.exportTourState === 'function' && typeof c.importTourState === 'function') {    
        _tourStateAPICache = c;    
        return c;    
      }    
    }    
    return null;    
  }    
    
  // Returns { pano, yaw, pitch, fov } or null    
  function exportCameraState() {    
    var api = findTourStateAPI();    
    if (!api) return null;    
    try {    
      var result = api.exportTourState();    
      var urlStr = result && (result.url || result);    
      if (!urlStr || typeof urlStr !== 'string') return null;    
      var params = new URLSearchParams(urlStr.replace(/^#/, ''));    
      var pano = params.get('media-name') || params.get('media') || '';    
      var yaw = parseFloat(params.get('yaw'));    
      var pitch = parseFloat(params.get('pitch'));    
      var fov = parseFloat(params.get('fov'));    
      if (!pano) return null;    
      return {    
        pano: pano,    
        yaw: Number.isFinite(yaw) ? yaw : 0,    
        pitch: Number.isFinite(pitch) ? pitch : 0,    
        fov: Number.isFinite(fov) ? fov : 90    
      };    
    } catch (e) { return null; }    
  }    
    
  // Jumps to `pano` at an exact yaw/pitch/fov using the canonical API    
  function importCameraState(pano, yaw, pitch, fov) {    
    var api = findTourStateAPI();    
    if (!api || !pano) return false;    
    yaw = Number.isFinite(Number(yaw)) ? Number(yaw) : 0;    
    pitch = Number.isFinite(Number(pitch)) ? Number(pitch) : 0;    
    fov = Number.isFinite(Number(fov)) ? Number(fov) : 90;    
    try {    
      var url = '#media-name=' + encodeURIComponent(pano) + '&yaw=' + yaw + '&pitch=' + pitch + '&fov=' + fov;    
      api.importTourState({ url: url });    
      return true;    
    } catch (e) { return false; }    
  }    
    
  function readViewFromTarget(target) {    
    var yaw = 0, pitch = 0, fov = 90;    
    if (!target) return { yaw: yaw, pitch: pitch, fov: fov };    
    try {    
      if (typeof target.getPanTiltFov === 'function') {    
        var ptf = target.getPanTiltFov();    
        if (ptf) {    
          if (ptf.pan != null) yaw = ptf.pan;    
          else if (ptf.yaw != null) yaw = ptf.yaw;    
          if (ptf.tilt != null) pitch = ptf.tilt;    
          else if (ptf.pitch != null) pitch = ptf.pitch;    
          if (ptf.fov != null) fov = ptf.fov;    
          else if (ptf.FOV != null) fov = ptf.FOV;    
        }    
      }    
    } catch (e) {}    
    try { if (typeof target.getView === 'function') { var v = target.getView(); if (v) { if (v.pan != null) yaw = v.pan; if (v.yaw != null) yaw = v.yaw; if (v.tilt != null) pitch = v.tilt; if (v.pitch != null) pitch = v.pitch; if (v.fov != null) fov = v.fov; if (v.FOV != null) fov = v.FOV; } } } catch (e) {}    
    try { if (typeof target.getPan === 'function') yaw = target.getPan(); } catch (e) {}    
    try { if (typeof target.getTilt === 'function') pitch = target.getTilt(); } catch (e) {}    
    try { if (typeof target.getYaw === 'function') yaw = target.getYaw(); else if (typeof target.yaw !== 'undefined') yaw = target.yaw; else if (target.camera && typeof target.camera.yaw !== 'undefined') yaw = target.camera.yaw; else if (target.view && typeof target.view.yaw !== 'undefined') yaw = target.view.yaw; } catch (e) {}    
    try { if (typeof target.getPitch === 'function') pitch = target.getPitch(); else if (typeof target.pitch !== 'undefined') pitch = target.pitch; else if (target.camera && typeof target.camera.pitch !== 'undefined') pitch = target.camera.pitch; else if (target.view && typeof target.view.pitch !== 'undefined') pitch = target.view.pitch; } catch (e) {}    
    try { if (typeof target.getFov === 'function') fov = target.getFov(); else if (typeof target.getFOV === 'function') fov = target.getFOV(); else if (typeof target.fov !== 'undefined') fov = target.fov; else if (typeof target.FOV !== 'undefined') fov = target.FOV; else if (target.camera && typeof target.camera.fov !== 'undefined') fov = target.camera.fov; else if (target.view && typeof target.view.fov !== 'undefined') fov = target.view.fov; } catch (e) {}    
    yaw = parseFloat(yaw); pitch = parseFloat(pitch); fov = parseFloat(fov);    
    return { yaw: Number.isFinite(yaw) ? yaw : 0, pitch: Number.isFinite(pitch) ? pitch : 0, fov: Number.isFinite(fov) ? fov : 90 };    
  }    
    
  function readGlobalViewState() {    
    var yaw = 0, pitch = 0, fov = 90;    
    try { if (typeof window.getPan === 'function') yaw = window.getPan(); } catch (e) {}    
    try { if (typeof window.getYaw === 'function') yaw = window.getYaw(); } catch (e) {}    
    try { if (typeof window.getTilt === 'function') pitch = window.getTilt(); } catch (e) {}    
    try { if (typeof window.getPitch === 'function') pitch = window.getPitch(); } catch (e) {}    
    try { if (typeof window.getFov === 'function') fov = window.getFov(); } catch (e) {}    
    try { if (typeof window.getFOV === 'function') fov = window.getFOV(); } catch (e) {}    
    yaw = parseFloat(yaw); pitch = parseFloat(pitch); fov = parseFloat(fov);    
    return { yaw: Number.isFinite(yaw) ? yaw : 0, pitch: Number.isFinite(pitch) ? pitch : 0, fov: Number.isFinite(fov) ? fov : 90 };    
  }    
    
  function viewStateHasAngle(viewState) {    
    if (!viewState) return false;    
    return Math.abs(viewState.yaw) > 0.01 || Math.abs(viewState.pitch) > 0.01;    
  }    
    
  function parseViewFromHash() {    
    var hash = String(location.hash || '').replace(/^#/, '');    
    if (!hash) return null;    
    var yawM = hash.match(/(?:^|&)yaw=([^&]+)/i);    
    var pitchM = hash.match(/(?:^|&)pitch=([^&]+)/i);    
    var fovM = hash.match(/(?:^|&)fov=([^&]+)/i);    
    var yaw = yawM ? parseFloat(decodeURIComponent(yawM[1])) : NaN;    
    var pitch = pitchM ? parseFloat(decodeURIComponent(pitchM[1])) : NaN;    
    var fov = fovM ? parseFloat(decodeURIComponent(fovM[1])) : NaN;    
    if (!Number.isFinite(yaw) && !Number.isFinite(pitch) && !Number.isFinite(fov)) return null;    
    return {    
      yaw: Number.isFinite(yaw) ? yaw : 0,    
      pitch: Number.isFinite(pitch) ? pitch : 0,    
      fov: Number.isFinite(fov) ? fov : 90    
    };    
  }    
    
  function panoramaNameEquals(currentName, targetName) {    
    currentName = String(currentName || '').toLowerCase();    
    targetName = String(targetName || '').toLowerCase();    
    if (!targetName) return false;    
    if (currentName === targetName) return true;    
    return currentName.slice(-(targetName.length + 1)) === '/' + targetName;    
  }    
    
  function readPanoramaNameFromCandidates(candidates) {    
    for (var i = 0; i < candidates.length; i++) {    
      var item = candidates[i];    
      if (!item) continue;    
      if (typeof item === 'string') return item;    
      try {    
        if (item.name) return item.name;    
        if (item.id) return item.id;    
        if (item.mediaName) return item.mediaName;    
        if (item.label) return item.label;    
        if (item.get) return item.get('name') || item.get('id') || item.get('mediaName') || item.get('label') || '';    
      } catch (e) {}    
    }    
    return '';    
  }    
    
  function tryJumpWithView(mediaName, viewState) {    
    var player = getPlayer();    
    var locManager = getLocManager();    
    var yaw = viewState && viewState.yaw;    
    var pitch = viewState && viewState.pitch;    
    var hasView = viewState && (Number.isFinite(yaw) || Number.isFinite(pitch));    
    var attempts = [];    
    
    if (player && hasView) {    
      if (typeof player.openPanoramaWithView === 'function') {    
        attempts.push(function () { player.openPanoramaWithView(mediaName, yaw, pitch); });    
      }    
      if (typeof player.setMediaByNameWithPanTilt === 'function') {    
        attempts.push(function () { player.setMediaByNameWithPanTilt(mediaName, yaw, pitch); });    
      }    
    }    
    if (locManager && hasView && typeof locManager.setMediaByNameWithPanTilt === 'function') {    
      attempts.push(function () { locManager.setMediaByNameWithPanTilt(mediaName, yaw, pitch); });    
    }    
    if (typeof window.setMediaByName === 'function') {    
      attempts.push(function () {    
        window.setMediaByName(mediaName);    
        if (hasView) {    
          try {    
            if (typeof window.setPan === 'function') window.setPan(yaw);    
            if (typeof window.setTilt === 'function') window.setTilt(pitch);    
            if (typeof window.setYaw === 'function') window.setYaw(yaw);    
            if (typeof window.setPitch === 'function') window.setPitch(pitch);    
          } catch (e) {}    
        }    
      });    
    }    
    
    for (var i = 0; i < attempts.length; i++) {    
      try {    
        attempts[i]();    
        if (player) refreshPlayer(player);    
        return true;    
      } catch (e) {}    
    }    
    return false;    
  }    
    
  function tryJump(mediaName, viewState) {    
    var player = getPlayer();    
    var tourRoot = getTourRoot();    
    var locManager = getLocManager();    
    var yaw = viewState && viewState.yaw;    
    var pitch = viewState && viewState.pitch;    
    var hasView = viewState && (Number.isFinite(yaw) || Number.isFinite(pitch));    
    
    if (hasView) {    
      try {    
        if (typeof window.setPan === 'function' && Number.isFinite(yaw)) window.setPan(yaw);    
        if (typeof window.setTilt === 'function' && Number.isFinite(pitch)) window.setTilt(pitch);    
        if (typeof window.setYaw === 'function' && Number.isFinite(yaw)) window.setYaw(yaw);    
        if (typeof window.setPitch === 'function' && Number.isFinite(pitch)) window.setPitch(pitch);    
      } catch (e) {}    
    }    
    
    var attempts = [];    
    if (typeof window.setMediaByName === 'function') {    
      attempts.push(function () { window.setMediaByName(mediaName); });    
    }    
    if (player) {    
      attempts.push(function () { player.setMediaByName(mediaName); });    
      if (hasView && typeof player.setMediaByNameWithPanTilt === 'function') {    
        attempts.push(function () { player.setMediaByNameWithPanTilt(mediaName, yaw, pitch); });    
      }    
      if (hasView && typeof player.openPanoramaWithView === 'function') {    
        attempts.push(function () { player.openPanoramaWithView(mediaName, yaw, pitch); });    
      }    
      attempts.push(function () { player.openPanorama(mediaName); });    
    }    
    if (tourRoot && typeof tourRoot.setMediaByName === 'function') {    
      attempts.push(function () { tourRoot.setMediaByName(mediaName); });    
    }    
    if (locManager && typeof locManager.setMediaByName === 'function') {    
      attempts.push(function () { locManager.setMediaByName(mediaName); });    
    }    
    if (typeof window.setMediaByIndex === 'function' && String(mediaName).match(/^\d+$/)) {    
      attempts.push(function () { window.setMediaByIndex(Number(mediaName)); });    
    }    
    
    for (var i = 0; i < attempts.length; i++) {    
      try {    
        attempts[i]();    
        if (player) refreshPlayer(player);    
        return true;    
      } catch (e) {}    
    }    
    return false;    
  }    
    
  function build3DVistaHash(mediaName, viewState) {    
    var parts = ['media=' + encodeURIComponent(mediaName)];    
    if (viewState && Number.isFinite(viewState.yaw)) parts.push('yaw=' + viewState.yaw);    
    if (viewState && Number.isFinite(viewState.pitch)) parts.push('pitch=' + viewState.pitch);    
    if (viewState && Number.isFinite(viewState.fov)) parts.push('fov=' + viewState.fov);    
    return parts.join('&');    
  }    
    
  function navigate3DVistaHash(mediaName, viewState) {    
    var hashVariants = [    
      build3DVistaHash(mediaName, viewState),    
      'media-name=' + encodeURIComponent(mediaName) +    
        (viewState && Number.isFinite(viewState.yaw) ? '&yaw=' + viewState.yaw : '') +    
        (viewState && Number.isFinite(viewState.pitch) ? '&pitch=' + viewState.pitch : '') +    
        (viewState && Number.isFinite(viewState.fov) ? '&fov=' + viewState.fov : '')    
    ];    
    for (var i = 0; i < hashVariants.length; i++) {    
      try {    
        var hashStr = hashVariants[i];    
        var current = String(location.hash || '').replace(/^#/, '');    
        if (current === hashStr) hashStr = hashStr + '&_r=' + Date.now();    
        location.hash = hashStr;    
        if (history.replaceState) history.replaceState(null, '', '#' + hashStr);    
        return true;    
      } catch (e) {}    
    }    
    return false;    
  }    
    
  function navigatePanoramaWithView(mediaName, viewState, preferPlayerView) {    
    if (!mediaName) return false;    
    viewState = viewState || getViewState();    
    if (preferPlayerView && tryJumpWithView(mediaName, viewState)) return true;    
    if (navigate3DVistaHash(mediaName, viewState)) return true;    
    return tryJumpWithView(mediaName, viewState) || tryJump(mediaName, viewState);    
  }    
    
  function goToPanorama(mediaName, immediate) {    
    if (!mediaName) return;    
    // Route through the same fade-to-black / fade-back-in mask used    
    // everywhere else (goToPanoramaSameSpot). Without this, floor    
    // switching (Nav1 carousel clicks) called tryJump() directly with    
    // no view state and no mask, which is exactly the raw, un-eased    
    // pano swap that produced the sharp/raggedy turn.    
    navigationInProgress = true;    
    mediaRequestId++;    
    var requestId = mediaRequestId;    
    
    function finish() {    
      if (requestId !== mediaRequestId) return;    
      navigationInProgress = false;    
      hidePanoTransitionMaskFade(320);    
    }    
    
    function waitForPanoThenFinish() {    
      var startedAt = Date.now();    
      var pollTimer = setInterval(function () {    
        if (requestId !== mediaRequestId) { clearInterval(pollTimer); finish(); return; }    
        var elapsed = Date.now() - startedAt;    
        var matched = panoramaNameEquals(getCurrentPanoramaNameFromPlayer(), mediaName);    
        // Small min-wait floor (mirrors waitForCameraSettle) so we    
        // never lift the mask before the new texture has a chance to    
        // actually paint, even if the state read-back matches instantly.    
        if ((matched && elapsed >= 300) || elapsed >= 3000) { clearInterval(pollTimer); finish(); }    
      }, 40);    
    }    
    
    fadeInPanoTransitionMask(MASK_FADE_IN_MS);    
    setTimeout(function () {    
      if (requestId !== mediaRequestId) { finish(); return; }    
      if (!tryJump(mediaName)) {    
        var timer = setInterval(function () {    
          if (requestId !== mediaRequestId) { clearInterval(timer); finish(); return; }    
          if (tryJump(mediaName)) { clearInterval(timer); waitForPanoThenFinish(); }    
        }, 80);    
        setTimeout(function () { clearInterval(timer); finish(); }, 4000);    
      } else {    
        waitForPanoThenFinish();    
      }    
    }, MASK_FADE_IN_MS);    
  }    
    
  function getTourRoot() {    
    return (window.tour && (window.tour.getRoot ? window.tour.getRoot() : window.tour.root)) || window.tour || null;    
  }    
    
  function getViewState() {    
    // Canonical source of truth first.    
    var cam = exportCameraState();    
    if (cam) return { yaw: cam.yaw, pitch: cam.pitch, fov: cam.fov };    
    
    // Fallback chain (kept as a safety net for edge cases where    
    // exportTourState isn't available yet, e.g. very early boot).    
    var hashView = parseViewFromHash();    
    if (hashView && viewStateHasAngle(hashView)) return hashView;    
    var globalView = readGlobalViewState();    
    if (viewStateHasAngle(globalView)) return globalView;    
    var locManager = getLocManager();    
    if (locManager && locManager.rootPlayer) {    
      var lmView = readViewFromTarget(locManager.rootPlayer);    
      if (viewStateHasAngle(lmView)) return lmView;    
    }    
    var player = getPlayer();    
    if (player) {    
      var playerView = readViewFromTarget(player);    
      if (viewStateHasAngle(playerView)) return playerView;    
    }    
    var tourRoot = getTourRoot();    
    if (tourRoot) {    
      var tourView = readViewFromTarget(tourRoot);    
      if (viewStateHasAngle(tourView)) return tourView;    
    }    
    if (player) return readViewFromTarget(player);    
    if (tourRoot) return readViewFromTarget(tourRoot);    
    if (hashView) return hashView;    
    return globalView;    
  }    
    
  function applyGlobalViewState(yaw, pitch, fov) {    
    var didApply = false;    
    try { if (typeof window.setPan === 'function') { window.setPan(yaw); didApply = true; } } catch (e) {}    
    try { if (typeof window.setTilt === 'function') { window.setTilt(pitch); didApply = true; } } catch (e) {}    
    try { if (typeof window.setYaw === 'function') { window.setYaw(yaw); didApply = true; } } catch (e) {}    
    try { if (typeof window.setPitch === 'function') { window.setPitch(pitch); didApply = true; } } catch (e) {}    
    try { if (typeof window.setFov === 'function') { window.setFov(fov); didApply = true; } } catch (e) {}    
    try { if (typeof window.setFOV === 'function') { window.setFOV(fov); didApply = true; } } catch (e) {}    
    return didApply;    
  }    
    
  function applyViewToTarget(target, yaw, pitch, fov) {    
    if (!target) return false;    
    var didApply = false;    
    try {    
      if (typeof target.setView === 'function') {    
        target.setView({ yaw: yaw, pitch: pitch, fov: fov, pan: yaw, tilt: pitch }, 0, true);    
        didApply = true;    
      }    
    } catch (e) {}    
    try { if (typeof target.setPanTiltFov === 'function') { target.setPanTiltFov(yaw, pitch, fov); didApply = true; } } catch (e) {}    
    try { if (typeof target.setPan === 'function') { target.setPan(yaw); didApply = true; } } catch (e) {}    
    try { if (typeof target.setTilt === 'function') { target.setTilt(pitch); didApply = true; } } catch (e) {}    
    try { if (typeof target.setYaw === 'function') { target.setYaw(yaw); didApply = true; } } catch (e) {}    
    try { if (typeof target.setPitch === 'function') { target.setPitch(pitch); didApply = true; } } catch (e) {}    
    try { if (typeof target.setFov === 'function') { target.setFov(fov); didApply = true; } else if (typeof target.setFOV === 'function') { target.setFOV(fov); didApply = true; } } catch (e) {}    
    if (didApply) refreshPlayer(target);    
    return didApply;    
  }    
    
  function setViewState(yaw, pitch, fov) {    
    if (yaw && typeof yaw === 'object') { pitch = yaw.pitch; fov = yaw.fov; yaw = yaw.yaw; }    
    yaw = Number.isFinite(Number(yaw)) ? Number(yaw) : 0;    
    pitch = Number.isFinite(Number(pitch)) ? Number(pitch) : 0;    
    fov = Number.isFinite(Number(fov)) ? Number(fov) : 90;    
    
    // Canonical path: re-import the current panorama at the target view.    
    var cam = exportCameraState();    
    if (cam && cam.pano) {    
      var applied = importCameraState(cam.pano, yaw, pitch, fov);    
      if (applied) return true;    
    }    
    
    // Fallback chain (kept as a safety net).    
    var player = getPlayer();    
    var tourRoot = getTourRoot();    
    var locManager = getLocManager();    
    var didApply = applyGlobalViewState(yaw, pitch, fov);    
    didApply = applyViewToTarget(player, yaw, pitch, fov) || didApply;    
    if (tourRoot && tourRoot !== player) didApply = applyViewToTarget(tourRoot, yaw, pitch, fov) || didApply;    
    if (locManager && locManager.rootPlayer) didApply = applyViewToTarget(locManager.rootPlayer, yaw, pitch, fov) || didApply;    
    return didApply;    
  }    
    
  function applyViewStateWithLock(viewState, durationMs) {    
    if (!viewState) return;    
    var lockDurationMs = durationMs || 3200;    
    var lockStartedAt = Date.now();    
    setViewState(viewState);    
    var lockTimer = setInterval(function () {    
      setViewState(viewState);    
      if (Date.now() - lockStartedAt >= lockDurationMs) clearInterval(lockTimer);    
    }, 35);    
  }    
    
  function panoramaNameMatches(currentName, targetName) {    
    currentName = String(currentName || '');    
    targetName = String(targetName || '');    
    return !!targetName && (currentName === targetName || currentName.indexOf(targetName) !== -1);    
  }    
    
  /* ══════════════════════════════════════════════════════════════    
     MASK-LIFT SETTLE CHECK    
     Instead of guessing a fixed duration before fading the transition    
     mask back out, poll the live camera state and only lift the mask    
     once yaw/pitch has verifiably reached the saved target — this is    
     what actually fixes the "reveals on the wrong frame, then snaps"    
     symptom, since 3DVista's own view-correction timing varies with    
     texture streaming and isn't a fixed number of ms.    
     ══════════════════════════════════════════════════════════════ */    
    
  function angleDelta(a, b) {    
    var diff = Math.abs((Number(a) || 0) - (Number(b) || 0)) % 360;    
    if (diff > 180) diff = 360 - diff;    
    return diff;    
  }    
    
  function cameraOnTarget(cam, mediaName, targetYaw, targetPitch, tolerance) {    
    if (!cam) return false;    
    tolerance = Number.isFinite(tolerance) ? tolerance : 1.5;    
    if (mediaName && !panoramaNameEquals(cam.pano, mediaName)) return false;    
    return angleDelta(cam.yaw, targetYaw) <= tolerance && Math.abs((cam.pitch || 0) - (targetPitch || 0)) <= tolerance;    
  }    
    
  // Polls exportCameraState() until it verifiably matches the target    
  // view, then calls onSettled(). Always resolves via the safety    
  // timeout so the mask can never get stuck open.    
  //    
  // IMPORTANT: exportCameraState() reads back 3DVista's *logical*    
  // camera state, which importCameraState() updates essentially    
  // synchronously. That means a state match can happen almost    
  // instantly — well before the new panorama's texture has actually    
  // loaded and the visible frame has caught up to that orientation.    
  // A state match alone is therefore NOT proof the frame is correct.    
  // minWaitMs is a hold floor: no match is accepted before it elapses,    
  // regardless of how early exportCameraState() reports one.    
  function waitForCameraSettle(mediaName, targetYaw, targetPitch, options, onSettled) {    
    options = options || {};    
    var pollMs = options.pollMs || 40;    
    var minWaitMs = Number.isFinite(options.minWaitMs) ? options.minWaitMs : 550;    
    var maxWaitMs = options.maxWaitMs || 2600;    
    var tolerance = options.tolerance || 1.5;    
    var requiredConsecutiveMatches = options.requiredConsecutiveMatches || 3;    
    var watchRequestId = mediaRequestId;    
    var startedAt = Date.now();    
    var consecutiveMatches = 0;    
    var settled = false;    
    
    function finish() {    
      if (settled) return;    
      settled = true;    
      clearInterval(pollTimer);    
      onSettled();    
    }    
    
    var pollTimer = setInterval(function () {    
      if (watchRequestId !== mediaRequestId) { finish(); return; }    
      var elapsed = Date.now() - startedAt;    
      var cam = exportCameraState();    
      var onTarget = cameraOnTarget(cam, mediaName, targetYaw, targetPitch, tolerance);    
      // Matches before minWaitMs don't count — they're almost certainly    
      // the logical-state readback outrunning the actual render.    
      consecutiveMatches = (onTarget && elapsed >= minWaitMs) ? consecutiveMatches + 1 : 0;    
      var timedOut = elapsed >= maxWaitMs;    
      if (consecutiveMatches >= requiredConsecutiveMatches || timedOut) finish();    
    }, pollMs);    
  }    
    
  // How long the mask takes to fade to fully opaque before we touch the
  // camera/panorama underneath. Kept short so the toggle still feels
  // responsive, but long enough to fully hide the snap.
  var MASK_FADE_IN_MS = 200;

  // TEMP: the fade-to-black transition mask (plus its settle-wait) made
  // the furnished/unfurnished toggle feel slow, so it's switched off for
  // now — goToPanoramaSameSpot takes a fast path straight to
  // importCameraState with no fade and no wait. Flip back to false to
  // restore the masked crossfade.
  var DISABLE_TRANSITION_MASK = true;

  /* ══════════════════════════════════════════════════════════════
     PRE-RENDER CAMERA FIX — verified against the live tour's actual
     object graph (there is no definitions.items[] array in this
     build — that was a guess and it was wrong).

     The real shape: window.tour.locManager.rootPlayer is a flat
     registry keyed by GUID. rootPlayer.getMediaByName(name) returns
     the Panorama component; .get('id') gives its GUID; rootPlayer
     also holds a sibling `<id>_camera` entry (a PanoramaCamera
     component) whose .get('initialPosition') returns a live
     PanoramaCameraPosition component with settable yaw/pitch/hfov
     attributes. THAT object is what 3DVista reads to build the very
     first camera frame when a panorama is (re)entered.

     Confirmed live in the browser console against this tour:
       - mutating initialPosition.set('yaw'/'pitch'/'hfov', ...)
       - then calling the native rootPlayer.setMainMediaByName(name)
     produces a panorama switch with the correct view already on the
     first rendered frame — no flash of the authored default, no
     manual correction needed afterward.

     Caveat: this mutates the tour's own authored default view for
     that panorama (it's the live component, not a copy). Any other
     navigation into it (native 3DVista hotspots, a fresh session)
     will now open at whatever angle was last set here instead of the
     originally authored one. Fine for a furnished/unfurnished pair of
     the same shot; worth knowing if this panorama is reachable some
     other way too.
     ══════════════════════════════════════════════════════════════ */

  function getRootPlayer() {
    var tourRoot = getTourRoot();
    return (tourRoot && tourRoot.locManager && tourRoot.locManager.rootPlayer) || null;
  }

  // Resolves mediaName -> its live PanoramaCameraPosition ("initialPosition")
  // component via rootPlayer.getMediaByName(name).get('id') -> rootPlayer[id
  // + '_camera'].get('initialPosition'). Returns null at any broken link.
  function getPanoramaInitialPositionComponent(mediaName) {
    var rp = getRootPlayer();
    if (!rp || typeof rp.getMediaByName !== 'function') return null;
    var media;
    try { media = rp.getMediaByName(mediaName); } catch (e) { return null; }
    if (!media || typeof media.get !== 'function') return null;
    var id;
    try { id = media.get('id'); } catch (e) { id = null; }
    if (!id) return null;
    var camComponent = rp[id + '_camera'];
    if (!camComponent || typeof camComponent.get !== 'function') return null;
    var initPos;
    try { initPos = camComponent.get('initialPosition'); } catch (e) { initPos = null; }
    if (!initPos || typeof initPos.set !== 'function') return null;
    return initPos;
  }

  // TEMP diagnostic switch — logs whether the preset actually landed on
  // every furnish-mode toggle. Flip to false once confirmed stable.
  var DEBUG_CAMERA_PRESET = true;

  // Mutates the live stored initial-view component for `mediaName` so
  // 3DVista's own next construction of that panorama's camera already
  // matches — see the block comment above for how this was verified.
  function presetPanoramaInitialView(mediaName, yaw, pitch, fov) {
    var initPos = getPanoramaInitialPositionComponent(mediaName);
    if (!initPos) {
      if (DEBUG_CAMERA_PRESET) {
        console.warn('[camera-preset] FAILED for "' + mediaName + '" — could not resolve rootPlayer.getMediaByName(name).get("id") -> rootPlayer[id+"_camera"].get("initialPosition")');
      }
      return false;
    }
    yaw = Number.isFinite(Number(yaw)) ? Number(yaw) : 0;
    pitch = Number.isFinite(Number(pitch)) ? Number(pitch) : 0;
    fov = Number.isFinite(Number(fov)) ? Number(fov) : 90;
    try {
      initPos.set('yaw', yaw);
      initPos.set('pitch', pitch);
      initPos.set('hfov', fov);
    } catch (e) {
      if (DEBUG_CAMERA_PRESET) console.warn('[camera-preset] set() threw for "' + mediaName + '":', e);
      return false;
    }
    if (DEBUG_CAMERA_PRESET) {
      console.log('[camera-preset] OK for "' + mediaName + '" — set yaw/pitch/hfov to', yaw, pitch, fov);
    }
    return true;
  }

  // Console helper — run window.debugCameraDefinition('some_pano_name')
  // against the live tour to confirm this chain resolves and see the
  // current stored yaw/pitch/hfov for that panorama.
  window.debugCameraDefinition = function (mediaName) {
    var rp = getRootPlayer();
    if (!rp) { console.log('[immersive-nav] no rootPlayer found'); return null; }
    if (!mediaName) { console.log('[immersive-nav] rootPlayer found; pass a mediaName to inspect its stored camera'); return { rootPlayer: rp }; }
    var initPos = getPanoramaInitialPositionComponent(mediaName);
    if (!initPos) { console.log('[immersive-nav] could not resolve initialPosition component for "' + mediaName + '"'); return null; }
    var current = { yaw: initPos.get('yaw'), pitch: initPos.get('pitch'), hfov: initPos.get('hfov') };
    console.log('[immersive-nav] stored initialPosition for "' + mediaName + '":', current);
    return { initPos: initPos, current: current };
  };

  function goToPanoramaSameSpot(mediaName, savedViewState) {
    if (!mediaName) return;
    var viewState = savedViewState || getViewState();

    // Pre-render fix: write the target view into 3DVista's own stored
    // definition for this panorama *before* triggering navigation, so
    // the camera 3DVista constructs on first render already matches —
    // instead of rendering its stored default first and correcting
    // yaw/pitch/fov afterwards (which is what produced the visible
    // jump in the first place).
    presetPanoramaInitialView(mediaName, viewState.yaw, viewState.pitch, viewState.fov);

    if (DISABLE_TRANSITION_MASK) {
      navigationInProgress = true;
      mediaRequestId++;
      var fastRequestId = mediaRequestId;

      // Primary path: the preset above already put the correct view on
      // this panorama's stored initialPosition, so the tour's own native
      // media switch now renders the right frame immediately — verified
      // directly against the live tour (no post-hoc correction needed).
      var rp = getRootPlayer();
      if (rp && typeof rp.setMainMediaByName === 'function') {
        try {
          rp.setMainMediaByName(mediaName);
          navigationInProgress = false;
          return;
        } catch (e) {
          if (DEBUG_CAMERA_PRESET) console.warn('[camera-preset] rootPlayer.setMainMediaByName threw, falling back:', e);
        }
      }

      // Fallback — only reached if rootPlayer/setMainMediaByName wasn't
      // available for some reason.
      if (findTourStateAPI()) {
        importCameraState(mediaName, viewState.yaw, viewState.pitch, viewState.fov);
        [80, 200, 400, 800].forEach(function (delay) {
          setTimeout(function () {
            if (fastRequestId !== mediaRequestId) return;
            importCameraState(mediaName, viewState.yaw, viewState.pitch, viewState.fov);
          }, delay);
        });
      } else {
        navigatePanoramaWithView(mediaName, viewState, true);
        applyViewStateWithLock(viewState, 800);
      }
      navigationInProgress = false;
      return;
    }

    // Already on the target pano — just re-assert the view. This is a
    // hard yaw/pitch snap under the hood (3DVista has no eased "turn to    
    // this angle" API we can rely on), so we hide it behind a quick    
    // fade-to-black/fade-back-in instead of letting the snap play out    
    // on screen — that's what removes the sharp, raggedy re-orientation    
    // when e.g. toggling furnished/unfurnished on the same panorama.    
    if (panoramaNameEquals(getCurrentPanoramaNameFromPlayer(), mediaName)) {    
      navigationInProgress = true;    
      mediaRequestId++;    
      var sameSpotRequestId = mediaRequestId;    
      fadeInPanoTransitionMask(MASK_FADE_IN_MS);    
      setTimeout(function () {    
        if (sameSpotRequestId !== mediaRequestId) return;    
        if (findTourStateAPI()) {    
          importCameraState(mediaName, viewState.yaw, viewState.pitch, viewState.fov);    
        } else {    
          applyViewStateWithLock(viewState, 900);    
        }    
        function reveal() {    
          if (sameSpotRequestId !== mediaRequestId) return;    
          navigationInProgress = false;    
          hidePanoTransitionMaskFade(320);    
        }    
        // Same panorama, no texture streaming to wait on — settling is    
        // just the angle catching up, so a short poll is enough.    
        waitForCameraSettle(    
          mediaName, viewState.yaw, viewState.pitch,    
          { pollMs: 30, minWaitMs: 90, maxWaitMs: 600, tolerance: 1.5, requiredConsecutiveMatches: 2 },    
          reveal    
        );    
      }, MASK_FADE_IN_MS);    
      return;    
    }    
    
    // ── Canonical path: exportTourState / importTourState ──    
    if (findTourStateAPI()) {    
      navigationInProgress = true;    
      mediaRequestId++;    
      var canonicalRequestId = mediaRequestId;    
      fadeInPanoTransitionMask(MASK_FADE_IN_MS);    
    
      setTimeout(function () {    
        if (canonicalRequestId !== mediaRequestId) return;    
        var applied = importCameraState(mediaName, viewState.yaw, viewState.pitch, viewState.fov);    
    
        if (applied) {    
          // 3DVista can reset yaw/pitch/fov once the new panorama's    
          // textures finish streaming in, so re-assert the view a few    
          // times as it settles.    
          var reinforceDelaysMs = [80, 200, 400, 800, 1500, 2500];    
          reinforceDelaysMs.forEach(function (delay) {    
            setTimeout(function () {    
              if (canonicalRequestId !== mediaRequestId) return;    
              importCameraState(mediaName, viewState.yaw, viewState.pitch, viewState.fov);    
            }, delay);    
          });    
    
          // Don't guess how long the settle takes — poll the actual    
          // camera state and only lift the mask once yaw/pitch has    
          // verifiably reached the saved target AND a minimum hold    
          // time has elapsed (state matches can be reported almost    
          // instantly, well before the frame has actually rendered).    
          // The 2600ms maxWaitMs is only a safety floor so the mask    
          // can never get stuck.    
          waitForCameraSettle(    
            mediaName,    
            viewState.yaw,    
            viewState.pitch,    
            { pollMs: 40, minWaitMs: 550, maxWaitMs: 2600, tolerance: 1.5, requiredConsecutiveMatches: 3 },    
            function () {    
              if (canonicalRequestId !== mediaRequestId) return;    
              hidePanoTransitionMaskFade(320);    
            }    
          );    
    
          setTimeout(function () {    
            if (canonicalRequestId === mediaRequestId) navigationInProgress = false;    
          }, 2600);    
          return;    
        }    
        navigationInProgress = false;    
        hidePanoTransitionMaskFade(200);    
        // fall through to legacy path if importCameraState failed for some reason    
        runLegacyFallback();    
      }, MASK_FADE_IN_MS);    
      return;    
    }    
    
    runLegacyFallback();    
    
    // ── Legacy fallback path (hash manipulation / tryJump probing) ──    
    function runLegacyFallback() {    
      navigationInProgress = true;    
      mediaRequestId++;    
      var requestId = mediaRequestId;    
      var reinforceDelays = [200, 500, 1000, 2000];    
      var delayedReinforceScheduled = false;    
      fadeInPanoTransitionMask(MASK_FADE_IN_MS);    
    
      function finishNavigation() {    
        navigationInProgress = false;    
        hidePanoTransitionMaskFade(320);    
      }    
    
      function scheduleDelayedReinforce() {    
        if (delayedReinforceScheduled) return;    
        delayedReinforceScheduled = true;    
        reinforceDelays.forEach(function (delay) {    
          setTimeout(function () {    
            if (requestId !== mediaRequestId) return;    
            applyViewStateWithLock(viewState, 800);    
          }, delay);    
        });    
      }    
    
      setTimeout(function () {    
        if (requestId !== mediaRequestId) return;    
        navigatePanoramaWithView(mediaName, viewState, true);    
        var startedAt = Date.now();    
        var maxWaitMs = 8000;    
        var reinforcePasses = 0;    
        var timer = setInterval(function () {    
          if (requestId !== mediaRequestId) { clearInterval(timer); finishNavigation(); return; }    
          if (panoramaNameEquals(getCurrentPanoramaNameFromPlayer(), mediaName)) {    
            reinforcePasses++;    
            applyViewStateWithLock(viewState, reinforcePasses === 1 ? 4500 : 2000);    
            if (reinforcePasses === 1) scheduleDelayedReinforce();    
            if (reinforcePasses >= 8) { clearInterval(timer); finishNavigation(); }    
            return;    
          }    
          if (Date.now() - startedAt >= maxWaitMs) { clearInterval(timer); finishNavigation(); }    
        }, 50);    
      }, MASK_FADE_IN_MS);    
    }    
  }    
    
 function goToFurnishMode(mode) {    
  var savedViewState = getViewState();    
  var target = '';    
    
  // If a blueprint is active in Nav2, that takes priority — never fall    
  // back to the floor panorama while a unit fit-out is selected.    
  if (state.nav2Visible && hasActiveBlueprint()) {    
    target = getBlueprintPanoramaForMode(getActiveBlueprintOption(), mode);    
  }    
    
  if (!target) {    
    var currentName = getCurrentPanoramaName();    
    target = resolvePanoramaForFurnishMode(currentName, mode);    
  }    
    
  if (!target) {    
    var floor = getFloor();    
    target = mode === 'furnished' ? floor.panoramaNameFurnished : floor.panoramaNameUnfurnished;    
    target = target || floor.panoramaName;    
  }    
    
  if (!target) return;    
    
  state.furnishMode = mode;    
  updateFurnishedToggleUI();    
    
  // Always route through goToPanoramaSameSpot — it already fades the    
  // mask in/out around both the "same panorama, re-orient" case (e.g.    
  // furnished/unfurnished sharing one pano) and the "different    
  // panorama" case, so the camera snap never plays out on screen.    
  goToPanoramaSameSpot(target, savedViewState);    
}    
    
  function parseMediaNameFromHash() {    
    var hash = String(location.hash || '').replace(/^#/, '');    
    var m = hash.match(/(?:^|&)media(?:-name)?=([^&]+)/i);    
    return m ? decodeURIComponent(m[1]) : '';    
  }    
    
  function getCurrentPanoramaNameFromPlayer() {    
    // Canonical source of truth first.    
    var cam = exportCameraState();    
    if (cam && cam.pano) return cam.pano;    
    
    // Fallback chain (kept as a safety net).    
    var player = getPlayer();    
    var tourRoot = getTourRoot();    
    var candidates = [];    
    try { if (player && player.getCurrentMedia) candidates.push(player.getCurrentMedia()); } catch (e) {}    
    try { if (player && player.getCurrentPanorama) candidates.push(player.getCurrentPanorama()); } catch (e) {}    
    try { if (player && player.getMedia) candidates.push(player.getMedia()); } catch (e) {}    
    try { if (player && player.currentMedia) candidates.push(player.currentMedia); } catch (e) {}    
    try { if (player && player.media) candidates.push(player.media); } catch (e) {}    
    try { if (player && player.panorama) candidates.push(player.panorama); } catch (e) {}    
    try { if (tourRoot && tourRoot.getCurrentMedia) candidates.push(tourRoot.getCurrentMedia()); } catch (e) {}    
    try { if (tourRoot && tourRoot.currentMedia) candidates.push(tourRoot.currentMedia); } catch (e) {}    
    try { if (tourRoot && tourRoot.media) candidates.push(tourRoot.media); } catch (e) {}    
    return readPanoramaNameFromCandidates(candidates);    
  }    
    
 function getCurrentPanoramaName() {    
  var liveName = getCurrentPanoramaNameFromPlayer();    
  if (liveName) return liveName;    
  var hashMedia = parseMediaNameFromHash();    
  if (hashMedia) return hashMedia;    
  return '';    
}    
    
  function getFloorByPanoramaName(mediaName) {    
    if (!mediaName) return null;    
    mediaName = String(mediaName);    
    return FLOORS.find(function (floor) {    
      return panoramaNameMatches(mediaName, floor.panoramaName) ||    
             panoramaNameMatches(mediaName, floor.panoramaNameFurnished) ||    
             panoramaNameMatches(mediaName, floor.panoramaNameUnfurnished);    
    }) || null;    
  }    
    
  window.debugPanorama = function () {    
    var player = getPlayer();    
    
    console.log('PLAYER', player);    
    console.log('exportCameraState', exportCameraState());    
    
    try { console.log('getCurrentMedia', player.getCurrentMedia && player.getCurrentMedia()); } catch (e) {}    
    try { console.log('getCurrentPanorama', player.getCurrentPanorama && player.getCurrentPanorama()); } catch (e) {}    
    try { console.log('currentMedia', player.currentMedia); } catch (e) {}    
    try { console.log('media', player.media); } catch (e) {}    
    try { console.log('panorama', player.panorama); } catch (e) {}    
  };    
    
  function syncNavigation1ToCurrentPanorama() {    
    if (navigationInProgress) return;    
    if (state.nav2Visible) return;    
    var mediaName = getCurrentPanoramaName();    
    syncFurnishModeFromPanoramaName(mediaName);    
    syncBlueprintFromPanoramaName(mediaName);    
    
    var matchedFloor = getFloorByPanoramaName(mediaName);    
    if (!matchedFloor) return;    
    
    if (state.activeFloorId !== matchedFloor.id) {    
      state.activeFloorId = matchedFloor.id;    
      setActiveUnitForFloorId(matchedFloor.id);    
      updateHUDStateNav1(false);    
    }    
  }    
    
  function setNavigationFloor(floorId, shouldJump) {    
    var matchedFloor = FLOORS.find(function (floor) {    
      return floor.id === floorId;    
    });    
    if (!matchedFloor) return false;    
    state.activeFloorId = matchedFloor.id;    
    setActiveUnitForFloorId(matchedFloor.id);    
    updateHUDStateNav1(!!shouldJump);    
    return true;    
  }    
    
  function setNavigationFloorByPanorama(mediaName) {    
    var matchedFloor = getFloorByPanoramaName(mediaName);    
    if (!matchedFloor) return false;    
    syncFurnishModeFromPanoramaName(mediaName);    
    return setNavigationFloor(matchedFloor.id, false);    
  }    
    
  window.syncNavigation1ToCurrentPanorama = syncNavigation1ToCurrentPanorama;    
  window.setNavigationFloor = setNavigationFloor;    
  window.setNavigationFloorByPanorama = setNavigationFloorByPanorama;    
    
 function matchFloorShortTitle(floor, query) {    
  if (!query) return true;    
  var cleaned = query.toLowerCase().trim();    
  if (cleaned === '') return true;    
  var unit = getUnitForFloor(floor);    
  var searchable = [    
    floor.id, floor.title, floor.levelLabel, floor.levelName, floor.shortTitle,    
    floor.panoramaName, floor.panoramaNameFurnished, floor.panoramaNameUnfurnished,    
    floor.searchKeywords   // <-- added    
  ];    
  if (unit) {    
    searchable.push(unit.id, unit.title, unit.subTitle, unit.floorLabel, unit.conditionLabel, unit.ceilingHeight, unit.powerSupply);    
    (unit.benefits || []).forEach(function (benefit) { searchable.push(benefit); });    
    if (unit.facts) { searchable.push(unit.facts.capacity, unit.facts.condition, unit.facts.customization); }    
    getUnitBlueprintOptions(unit).forEach(function (opt) {    
      searchable.push(opt.id, opt.label, opt.description, opt.panoramaName, opt.panoramaNameFurnished, opt.panoramaNameUnfurnished);    
      (opt.metrics || []).forEach(function (metric) { searchable.push(metric.label, metric.value, metric.icon); });    
    });    
  }    
  return searchable.some(function (value) { return String(value || '').toLowerCase().indexOf(cleaned) !== -1; });    
}    
    
  function textMatches(value, query) { return String(value || '').toLowerCase().indexOf(query) !== -1; }    
    
 function findSearchFloorResult(query) {    
  var cleaned = String(query || '').toLowerCase().trim();    
  if (!cleaned) return null;    
    
  // 1. Exact code match (g, l2, l3)    
  var exactFloor = FLOORS.find(function (floor) {    
    return String(floor.shortTitle || '').toLowerCase() === cleaned ||    
           String(floor.levelLabel || '').toLowerCase() === cleaned ||    
           String(floor.id || '').toLowerCase() === cleaned;    
  });    
  if (exactFloor) return exactFloor;    
    
  // 2. Curated floor-level keywords/theme (authoritative)    
  var keywordFloor = FLOORS.find(function (floor) {    
    return String(floor.searchKeywords || '').toLowerCase().indexOf(cleaned) !== -1;    
  });    
  if (keywordFloor) return keywordFloor;    
    
  // 3. Blueprint/unit text match    
  for (var i = 0; i < FLOORS.length; i++) {    
    var floor = FLOORS[i];    
    var unit = getUnitForFloor(floor);    
    if (!unit) continue;    
    var blueprintMatch = getUnitBlueprintOptions(unit).some(function (opt) {    
      return textMatches(opt.id, cleaned) || textMatches(opt.label, cleaned) || textMatches(opt.description, cleaned) ||    
             textMatches(opt.panoramaName, cleaned) || textMatches(opt.panoramaNameFurnished, cleaned) || textMatches(opt.panoramaNameUnfurnished, cleaned) ||    
             (opt.metrics || []).some(function (metric) { return textMatches(metric.label, cleaned) || textMatches(metric.value, cleaned) || textMatches(metric.icon, cleaned); });    
    });    
    if (blueprintMatch) return floor;    
  }    
    
  // 4. General fallback across all remaining fields    
  return FLOORS.find(function (floor) { return matchFloorShortTitle(floor, cleaned); }) || null;    
}    
    
  function openSearchResult(query) {    
    var floor = findSearchFloorResult(query);    
    if (!floor) return false;    
    state.activeFloorId = floor.id;    
    setActiveUnitForFloorId(floor.id);    
    updateHUDStateNav1(true);    
    return true;    
  }    
    
  function setFloorplanButtonsActive(isActive) {    
    [sel('nav1-action-floorplan'), sel('nav2-action-floorplan')].forEach(function (btn) {    
      if (!btn) return;    
      btn.classList.toggle('is-primary', isActive);    
      btn.classList.toggle('is-secondary', !isActive);    
    });    
  }    
    
  function openExternalFloorplanIframe() {    
    var existingView = sel('custom-fullscreen-floorplan-container');    
    if (existingView) { existingView.style.setProperty('display', 'block', 'important'); setFloorplanButtonsActive(true); return; }    
    var fullScreenContainer = document.createElement('div');    
    fullScreenContainer.id = 'custom-fullscreen-floorplan-container';    
    fullScreenContainer.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2147483647;background:#000;display:block;border:none;margin:0;padding:0;overflow:hidden;';    
    fullScreenContainer.innerHTML = `    
      <iframe allowfullscreen="true" allow="accelerometer;autoplay;camera;display-capture;fullscreen;geolocation;gyroscope;magnetometer;microphone;vr;xr-spatial-tracking" src="https://floorplan-client.netlify.app/v/cool-company-rb62" frameborder="0" scrolling="auto" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;margin:0;padding:0;z-index:1;"></iframe>    
      <div style="position:absolute;bottom:40px;left:40px;z-index:2147483645;pointer-events:auto;">    
        <button id="close-fullscreen-floorplan-btn" style="height:48px;padding:0 24px;border-radius:50px;background:#fff;border:1px solid rgba(0,0,0,0.05);cursor:pointer;box-shadow:0 20px 40px rgba(0,0,0,0.4);display:flex;align-items:center;gap:10px;font-family:'Inter',sans-serif;font-size:12.5px;color:#0c0a09;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;transition:all 0.3s cubic-bezier(0.16,1,0.3,1);">    
          <i data-lucide="arrow-left" style="width:14px;height:14px;stroke-width:2.5px;"></i>    
          <span>Return to Overview</span>    
        </button>    
      </div>`;    
    var nav1 = sel('immersive-canvas-nav1');    
    var nav2 = sel('immersive-canvas-nav2');    
    var toggle = sel('immersive-furnished-toggle');    
    
    if (nav1) nav1.style.pointerEvents = 'none';    
    if (nav2) nav2.style.pointerEvents = 'none';    
    if (toggle) toggle.style.pointerEvents = 'none';    
    document.body.appendChild(fullScreenContainer);    
    ensureHudLayerMounted();    
    refreshIcons();    
    setFloorplanButtonsActive(true);    
    var btn = sel('close-fullscreen-floorplan-btn');    
    if (btn) {    
      btn.onmouseenter = function() { this.style.transform='scale(1.04) translateY(-2px)'; this.style.boxShadow='0 25px 50px rgba(0,0,0,0.55)'; };    
      btn.onmouseleave = function() { this.style.transform='scale(1) translateY(0)'; this.style.boxShadow='0 20px 40px rgba(0,0,0,0.4)'; };    
      btn.onclick = function() { closeExternalFloorplanIframe(); };    
    }    
  }    
    
  function closeExternalFloorplanIframe() {    
    var nav1 = sel('immersive-canvas-nav1');    
    var nav2 = sel('immersive-canvas-nav2');    
    var toggle = sel('immersive-furnished-toggle');    
    
    if (nav1) nav1.style.pointerEvents = '';    
    if (nav2) nav2.style.pointerEvents = '';    
    if (toggle) toggle.style.pointerEvents = '';    
    var existingView = sel('custom-fullscreen-floorplan-container');    
    if (existingView) existingView.style.setProperty('display','none','important');    
    setFloorplanButtonsActive(false);    
  }    
    
  function toggleExternalFloorplanIframe() {    
    var existingView = sel('custom-fullscreen-floorplan-container');    
    var isOpen = existingView && existingView.style.display !== 'none';    
    if (isOpen) { closeExternalFloorplanIframe(); } else { openExternalFloorplanIframe(); }    
  }    
    
  /* ── STYLE INJECTION ── */    
  var styleTag = document.createElement('style');    
  styleTag.innerHTML = `    
    @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Inter:wght@300;400;500;600&display=swap');    
    
    /* ── HUD ROOT (stays visible in browser / 3DVista fullscreen) ── */    
    #immersive-hud-layer {    
      position:fixed !important; top:0 !important; left:0 !important; width:100% !important; height:100% !important;    
      pointer-events:none !important; z-index:2147483646 !important; overflow:visible !important;    
    }    
    
    /* ── PANORAMA TRANSITION MASK ── */    
    /* background-color is the fallback (used only if a live-frame     
       snapshot can't be captured); background-image is set/cleared     
       per-transition by JS to hold the actual frozen frame that gets     
       cross-faded against the new panorama. */    
    #immersive-pano-transition-mask {    
      position:fixed !important; top:0 !important; left:0 !important; width:100% !important; height:100% !important;    
      background-color:#0c0a09 !important; background-size:cover !important; background-position:center center !important; background-repeat:no-repeat !important;    
      z-index:1 !important; pointer-events:none !important; opacity:0;    
    }    
    
    /* ── NAV 1 ── */    
    #immersive-canvas-nav1, #immersive-canvas-nav1 * { font-family:'Inter',sans-serif !important; box-sizing:border-box; outline:none !important; }    
    #immersive-canvas-nav1 {    
      --nav-glass-radius-expanded: 18px; --nav-glass-radius-collapsed: 999px; --nav-glass-bg: rgba(12,10,9,0.55); --nav-glass-border: rgba(255,255,255,0.62); --nav-glass-blur: 38px;    
      --nav-glass-shadow: 0 24px 56px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.90), inset 0 -1px 0 rgba(255,255,255,0.30);    
      --glass-border: rgba(0,0,0,0.08); --glass-radius-pill: 999px;    
      --ink-faint: rgba(245,242,236,0.45); --ink-soft: rgba(245,242,236,0.65);    
      --ink-strong: #F5F2EC; --ease: cubic-bezier(0.22,0.61,0.36,1);    
      --hud-corner-inset: 12px;    
      position:fixed !important; top:var(--hud-corner-inset) !important; left:var(--hud-corner-inset) !important; right:auto !important; bottom:auto !important;    
      max-height:calc(100vh - (var(--hud-corner-inset) * 2)) !important; z-index:99999998 !important; pointer-events:none !important; display:none; opacity:0; transform:scale(0.97) translateY(-6px); transition:opacity 280ms var(--ease), transform 280ms var(--ease);    
    }    
    #immersive-canvas-nav1.hud-ready { opacity:1 !important; transform:scale(1) translateY(0) !important; display:flex !important; flex-direction:column !important; gap:8px !important; align-items:stretch !important; }    
    
    .nav-glass-shell { width:360px !important; background:var(--nav-glass-bg) !important; backdrop-filter:blur(var(--nav-glass-blur)) saturate(175%) !important; -webkit-backdrop-filter:blur(var(--nav-glass-blur)) saturate(175%) !important; border:1px solid var(--nav-glass-border) !important; border-radius:var(--nav-glass-radius-expanded) !important; box-shadow:var(--nav-glass-shadow) !important; display:flex !important; flex-direction:column !important; overflow:hidden !important; pointer-events:auto !important; max-height:calc(100vh - (var(--hud-corner-inset, 12px) * 2)) !important; transition:border-radius 280ms var(--ease), box-shadow 280ms var(--ease) !important; }    
    #immersive-canvas-nav2 .nav-glass-shell { width:380px !important; }    
    
    .premium-directory-panel { width:100% !important; background:transparent !important; border:none !important; border-radius:0 !important; box-shadow:none !important; padding:24px !important; display:flex !important; flex-direction:column !important; gap:24px !important; pointer-events:auto !important; flex:1 1 auto !important; min-height:0 !important; overflow-y:auto !important; overflow-x:hidden !important; }    
    .nav-collapse-btn { width:34px !important; height:34px !important; border-radius:50% !important; background:rgba(0,0,0,0.04) !important; border:1px solid var(--glass-border) !important; color:var(--ink-soft) !important; display:flex !important; align-items:center !important; justify-content:center !important; cursor:pointer !important; flex-shrink:0 !important; transition:background 220ms var(--ease),border-color 220ms var(--ease),color 220ms var(--ease),transform 220ms var(--ease) !important; }    
    .nav-collapse-btn:hover { background:rgba(0,0,0,0.08) !important; border-color:rgba(0,0,0,0.14) !important; color:var(--ink-strong) !important; }    
    .nav-collapse-btn:active { transform:scale(0.94) !important; }    
    
    /* ── COLLAPSED PILL — inside glass shell ── */    
    .nav-collapsed-pill { min-width:0 !important; width:100% !important; min-height:64px !important; padding:12px 20px !important; border-radius:var(--glass-radius-pill) !important; background:transparent !important; border:none !important; box-shadow:none !important; color:var(--ink-strong) !important; display:none !important; align-items:center !important; gap:14px !important; pointer-events:auto !important; flex-shrink:0 !important; }    
    .nav-collapsed-title { font-family:'Marcellus','Trajan Pro',serif !important; font-size:17px !important; font-weight:400 !important; line-height:1.3 !important; letter-spacing:0.4px !important; white-space:nowrap !important; overflow:hidden !important; text-overflow:ellipsis !important; color:var(--ink-strong) !important; }    
    .nav-expand-btn { margin-left:auto !important; min-height:36px !important; padding:8px 18px !important; border-radius:var(--glass-radius-pill) !important; border:1px solid var(--glass-border) !important; background:rgba(0,0,0,0.04) !important; color:var(--ink-soft) !important; font-size:11px !important; font-weight:500 !important; letter-spacing:1.1px !important; text-transform:uppercase !important; cursor:pointer !important; transition:background 220ms var(--ease),border-color 220ms var(--ease),color 220ms var(--ease),transform 220ms var(--ease) !important; }    
    .nav-expand-btn:hover { background:rgba(0,0,0,0.08) !important; border-color:rgba(0,0,0,0.14) !important; color:var(--ink-strong) !important; }    
    .nav-expand-btn:active { transform:scale(0.96) !important; }    
    
    #immersive-canvas-nav1.is-collapsed .premium-directory-panel, #immersive-canvas-nav2.is-collapsed .nav2-main-panel { display:none !important; }    
    #immersive-canvas-nav1.is-collapsed .nav-glass-shell, #immersive-canvas-nav2.is-collapsed .nav-glass-shell { border-radius:var(--nav-glass-radius-collapsed) !important; }    
    #immersive-canvas-nav1.is-collapsed .nav-collapsed-pill, #immersive-canvas-nav2.is-collapsed .nav-collapsed-pill { display:flex !important; }    
    .nav-furnish-footer { width:100% !important; min-width:0 !important; padding:0 !important; flex-shrink:0 !important; pointer-events:auto !important; }    
    .nav1-divider { height:1px !important; background:var(--glass-border) !important; margin:0 !important; border:none !important; }    
    .header-row-nav1  { display:flex !important; align-items:flex-start !important; gap:14px !important; }    
    .icon-badge-box   { width:34px !important; height:34px !important; border-radius:50% !important; background:rgba(0,0,0,0.04) !important; border:1px solid var(--glass-border) !important; display:flex !important; align-items:center !important; justify-content:center !important; color:var(--ink-soft) !important; flex-shrink:0 !important; margin-top:1px; }    
    .meta-text-block  { display:flex !important; flex-direction:column !important; flex-grow:1 !important; min-width:0; }    
    .meta-subtitle    { font-size:10px !important; font-weight:500 !important; color:var(--ink-faint) !important; letter-spacing:1.6px !important; text-transform:uppercase !important; }    
    .meta-title       { font-family:'Marcellus','Trajan Pro',serif !important; font-size:18px !important; font-weight:400 !important; color:var(--ink-strong) !important; margin-top:7px !important; letter-spacing:0.4px !important; line-height:1.35 !important; }    
    .meta-title .level-name { display:block !important; font-size:13.5px !important; color:var(--ink-soft) !important; font-family:'Inter',sans-serif !important; font-weight:300 !important; letter-spacing:0.2px !important; margin-top:3px !important; }    
    .meta-helper      { font-size:12px !important; font-weight:300 !important; color:var(--ink-faint) !important; line-height:1.6 !important; margin:10px 0 0 0 !important; }    
    .nav1-section-label { font-size:10px !important; font-weight:500 !important; color:var(--ink-faint) !important; letter-spacing:1.6px !important; text-transform:uppercase !important; margin:0 0 12px 0 !important; display:block; }    
    .carousel-container { display:flex !important; align-items:center !important; gap:8px !important; }    
    .carousel-track     { display:flex !important; gap:8px !important; flex-grow:1 !important; align-items:center !important; }    
    .nav-arrow-btn      { width:36px !important; height:36px !important; border-radius:50% !important; background:rgba(0,0,0,0.04) !important; border:1px solid var(--glass-border) !important; color:var(--ink-soft) !important; display:flex !important; align-items:center !important; justify-content:center !important; cursor:pointer !important; flex-shrink:0 !important; transition:background 220ms var(--ease),border-color 220ms var(--ease),color 220ms var(--ease),transform 220ms var(--ease) !important; }    
    .nav-arrow-btn:hover { background:rgba(0,0,0,0.08) !important; border-color:rgba(0,0,0,0.14) !important; color:var(--ink-strong) !important; }    
    .nav-arrow-btn:active { transform:scale(0.94) !important; }    
    .floor-caro-item  { position:relative !important; flex:1 !important; height:36px !important; border-radius:var(--glass-radius-pill) !important; background:rgba(0,0,0,0.03) !important; border:1px solid var(--glass-border) !important; color:var(--ink-soft) !important; font-size:11px !important; font-weight:400 !important; letter-spacing:0.8px !important; display:flex !important; align-items:center !important; justify-content:center !important; cursor:pointer !important; transition:background 220ms var(--ease),border-color 220ms var(--ease),color 220ms var(--ease),box-shadow 220ms var(--ease) !important; }    
    .floor-caro-item:hover { background:rgba(0,0,0,0.06) !important; color:var(--ink-strong) !important; border-color:rgba(0,0,0,0.14) !important; }    
    .floor-caro-item.is-active-level { background:#34d399 !important; border-color:#34d399 !important; color:#052e1f !important; font-weight:700 !important; box-shadow:0 10px 24px rgba(52,211,153,0.35) !important; }    
    .floor-search-shell { position:relative !important; width:100% !important; display:flex !important; align-items:center !important; }    
    .floor-search-shell .floor-search-icon { position:absolute !important; left:16px !important; color:var(--ink-faint) !important; width:14px !important; height:14px !important; pointer-events:none !important; z-index:2 !important; }    
    .floor-search-input { width:100% !important; height:44px !important; border-radius:var(--glass-radius-pill) !important; background:rgba(0,0,0,0.04) !important; border:1px solid var(--glass-border) !important; padding:0 16px 0 42px !important; color:var(--ink-strong) !important; font-size:12.5px !important; font-weight:300 !important; letter-spacing:0.2px !important; transition:border-color 220ms var(--ease),background 220ms var(--ease) !important; }    
    .floor-search-input:focus { border-color:rgba(0,0,0,0.2) !important; background:rgba(0,0,0,0.06) !important; }    
    .floor-search-input::placeholder { color:var(--ink-faint) !important; }    
    .nav1-action-footer-row { display:flex !important; gap:10px !important; }    
    .nav1-footer-action-btn { flex:1 !important; display:flex !important; align-items:center !important; justify-content:center !important; gap:8px !important; min-height:44px !important; padding:12px 16px !important; border-radius:var(--glass-radius-pill) !important; font-size:11px !important; font-weight:500 !important; letter-spacing:1.1px; text-transform:uppercase; cursor:pointer !important; transition:background 220ms var(--ease),border-color 220ms var(--ease),color 220ms var(--ease),transform 220ms var(--ease) !important; }    
    .nav1-footer-action-btn:active { transform:scale(0.97) !important; }    
    .nav1-footer-action-btn.is-primary   { background:var(--ink-strong) !important; border:1px solid var(--ink-strong) !important; color:#fff !important; }    
    .nav1-footer-action-btn.is-primary:hover { background:#000 !important; box-shadow:0 10px 24px rgba(0,0,0,0.12) !important; }    
    .nav1-footer-action-btn.is-secondary { background:rgba(0,0,0,0.03) !important; border:1px solid var(--glass-border) !important; color:var(--ink-soft) !important; }    
    .nav1-footer-action-btn.is-secondary:hover { background:rgba(0,0,0,0.06) !important; border-color:rgba(0,0,0,0.14) !important; color:var(--ink-strong) !important; }    
    .leasing-info-card { display:grid !important; grid-template-columns:1fr 1fr !important; gap:8px !important; }    
    .leasing-stat { background:rgba(0,0,0,0.03) !important; border:1px solid var(--glass-border) !important; border-radius:14px !important; padding:13px 14px !important; display:flex !important; flex-direction:column !important; gap:7px !important; }    
    .leasing-stat-label { display:flex !important; align-items:center !important; gap:6px !important; font-size:9px !important; font-weight:500 !important; color:var(--ink-faint) !important; letter-spacing:1.4px !important; text-transform:uppercase !important; line-height:1 !important; }    
    .leasing-stat-label i { width:11px !important; height:11px !important; flex-shrink:0 !important; color:var(--ink-faint) !important; }    
    .leasing-stat-value { font-size:17px !important; font-weight:500 !important; color:var(--ink-strong) !important; letter-spacing:0.1px !important; line-height:1 !important; }    
    
    /* ── NAV 2 ── */    
    #immersive-canvas-nav2, #immersive-canvas-nav2 * { font-family:'Inter',sans-serif !important; box-sizing:border-box; outline:none !important; }    
    #immersive-canvas-nav2 {    
      --nav-glass-radius-expanded: 18px; --nav-glass-radius-collapsed: 999px; --nav-glass-bg: rgba(12,10,9,0.55); --nav-glass-border: rgba(255,255,255,0.62); --nav-glass-blur: 38px;    
      --nav-glass-shadow: 0 24px 56px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.90), inset 0 -1px 0 rgba(255,255,255,0.30);    
      --glass-border: rgba(0,0,0,0.08); --glass-radius-pill: 999px;    
      --ink-faint: rgba(245,242,236,0.45); --ink-soft: rgba(245,242,236,0.65);    
      --ink-strong: #F5F2EC; --ease: cubic-bezier(0.22,0.61,0.36,1);    
      --hud-corner-inset: 12px;    
      position:fixed !important; top:var(--hud-corner-inset) !important; left:var(--hud-corner-inset) !important; right:auto !important; bottom:auto !important;    
      max-height:calc(100vh - (var(--hud-corner-inset) * 2)) !important; z-index:99999997 !important; pointer-events:none !important; display:none; opacity:0;    
      transform:scale(0.97) translateY(-6px); transition:opacity 300ms cubic-bezier(0.22,0.61,0.36,1), transform 300ms cubic-bezier(0.22,0.61,0.36,1);    
    }    
    #immersive-canvas-nav2.hud-ready { opacity:1 !important; transform:scale(1) translateY(0) !important; display:flex !important; flex-direction:column !important; gap:8px !important; align-items:stretch !important; }    
    
    .nav2-main-panel {    
      width:100% !important; background:transparent !important; border:none !important; border-radius:0 !important; box-shadow:none !important;    
      display:flex !important; flex-direction:column !important; flex:1 1 auto !important; min-height:0 !important; overflow-y:auto !important; overflow-x:hidden !important; pointer-events:auto !important;    
    }    
    .nav2-panel-header { display:flex !important; align-items:flex-start !important; gap:12px !important; }    
    .nav2-panel-header-main { flex:1 !important; min-width:0 !important; }    
    .nav2-section { padding:18px 22px !important; border-bottom:1px solid var(--glass-border) !important; }    
    .nav2-section:last-child { border-bottom:none !important; }    
    .nav2-eyebrow { display:flex !important; align-items:center !important; gap:7px !important; font-size:9px !important; font-weight:500 !important; letter-spacing:2.2px !important; text-transform:uppercase !important; color:var(--ink-faint) !important; margin-bottom:12px !important; }    
    .nav2-eyebrow i { width:11px !important; height:11px !important; }    
    .nav2-badge-row { display:flex !important; align-items:center !important; gap:6px !important; margin-bottom:10px !important; }    
    .nav2-badge { display:inline-flex !important; align-items:center !important; gap:5px !important; padding:3px 10px !important; border-radius:999px !important; font-size:10px !important; font-weight:500 !important; letter-spacing:0.3px !important; }    
    .nav2-badge.is-available { background:rgba(52,211,153,0.11) !important; border:1px solid rgba(52,211,153,0.22) !important; color:#6ee7b7 !important; }    
    .nav2-badge.is-available::before { content:'' !important; display:block !important; width:5px !important; height:5px !important; border-radius:50% !important; background:#34d399 !important; flex-shrink:0 !important; }    
    .nav2-badge.is-bare { background:rgba(0,0,0,0.04) !important; border:1px solid var(--glass-border) !important; color:var(--ink-soft) !important; }    
    .nav2-unit-title { font-family:'Marcellus',serif !important; font-size:25px !important; font-weight:400 !important; color:var(--ink-strong) !important; letter-spacing:0.5px !important; line-height:1.1 !important; margin-bottom:3px !important; }    
    .nav2-unit-sub { font-size:12px !important; font-weight:300 !important; color:var(--ink-faint) !important; margin-bottom:12px !important; }    
    .nav2-chip-row { display:flex !important; gap:6px !important; flex-wrap:wrap !important; }    
    .nav2-chip { display:flex !important; align-items:center !important; gap:5px !important; padding:4px 10px !important; border-radius:7px !important; background:rgba(0,0,0,0.03) !important; border:1px solid var(--glass-border) !important; font-size:10.5px !important; font-weight:400 !important; color:var(--ink-soft) !important; }    
    .nav2-chip i { width:11px !important; height:11px !important; color:var(--ink-faint) !important; }    
    .nav2-benefit-list { display:flex !important; flex-direction:column !important; gap:7px !important; }    
    .nav2-benefit-item { display:flex !important; align-items:center !important; gap:9px !important; font-size:12px !important; font-weight:400 !important; color:var(--ink-soft) !important; line-height:1.3 !important; }    
    .nav2-benefit-dot { width:17px !important; height:17px !important; border-radius:50% !important; background:rgba(52,211,153,0.09) !important; border:1px solid rgba(52,211,153,0.2) !important; display:flex !important; align-items:center !important; justify-content:center !important; flex-shrink:0 !important; }    
    .nav2-benefit-dot i { width:9px !important; height:9px !important; color:#6ee7b7 !important; stroke-width:2.8px !important; }    
    .nav2-facts-grid { display:grid !important; grid-template-columns:1fr 1fr !important; gap:7px !important; }    
    .nav2-fact-card { background:rgba(0,0,0,0.03) !important; border:1px solid var(--glass-border) !important; border-radius:13px !important; padding:12px 13px !important; display:flex !important; flex-direction:column !important; gap:5px !important; }    
    .nav2-fact-label { display:flex !important; align-items:center !important; gap:6px !important; font-size:9px !important; font-weight:500 !important; letter-spacing:1.6px !important; text-transform:uppercase !important; color:var(--ink-faint) !important; }    
    .nav2-fact-label i { width:10px !important; height:10px !important; }    
    .nav2-fact-value { font-size:13.5px !important; font-weight:400 !important; color:var(--ink-strong) !important; letter-spacing:0.1px !important; }    
    .nav2-blueprint-grid { display:grid !important; grid-template-columns:repeat(2,1fr) !important; gap:6px !important; max-height:172px !important; overflow-y:auto !important; padding-right:2px !important; }    
    .nav2-blueprint-grid::-webkit-scrollbar { width:3px !important; }    
    .nav2-blueprint-grid::-webkit-scrollbar-thumb { background:rgba(0,0,0,0.12) !important; border-radius:99px !important; }    
    .nav2-blueprint-btn { padding:9px 12px !important; border-radius:11px !important; background:rgba(0,0,0,0.03) !important; border:1px solid var(--glass-border) !important; color:var(--ink-soft) !important; font-size:10.5px !important; font-weight:400 !important; text-align:left !important; cursor:pointer !important; line-height:1.3 !important; transition:all 200ms cubic-bezier(0.22,0.61,0.36,1) !important; }    
    .nav2-blueprint-btn:hover { background:rgba(0,0,0,0.06) !important; border-color:rgba(0,0,0,0.14) !important; color:var(--ink-strong) !important; transform:translateY(-1px) !important; }    
    .nav2-blueprint-btn.is-active { background:#34d399 !important; border-color:#34d399 !important; color:#052e1f !important; font-weight:600 !important; box-shadow:0 8px 20px rgba(52,211,153,0.35) !important; transform:none !important; }    
    .nav2-blueprint-btn.is-disabled { opacity: 0.35 !important; cursor: not-allowed !important; pointer-events: none !important; transform: none !important; }    
    .nav2-blueprint-label { display:block !important; }    
    .nav2-blueprint-cost  { display:block !important; font-size:9px !important; margin-top:3px !important; opacity:0.5 !important; letter-spacing:0.3px !important; }    
    .nav2-blueprint-btn.is-active .nav2-blueprint-cost { opacity:0.85 !important; color:#052e1f !important; }    
    .nav2-action-footer-row { display:flex !important; gap:10px !important; padding:16px 22px 20px !important; }    
    .nav2-footer-action-btn { flex:1 !important; display:flex !important; align-items:center !important; justify-content:center !important; gap:8px !important; min-height:46px !important; padding:13px 16px !important; border-radius:var(--glass-radius-pill) !important; font-size:11px !important; font-weight:500 !important; letter-spacing:1px !important; text-transform:uppercase !important; cursor:pointer !important; transition:all 220ms cubic-bezier(0.22,0.61,0.36,1) !important; }    
    .nav2-footer-action-btn:active { transform:scale(0.97) !important; }    
    .nav2-footer-action-btn.is-primary { background:var(--ink-strong) !important; border:1px solid var(--ink-strong) !important; color:#fff !important; }    
    .nav2-footer-action-btn.is-primary:hover { background:#000 !important; box-shadow:0 12px 30px rgba(0,0,0,0.12) !important; transform:translateY(-1px) !important; }    
    .nav2-footer-action-btn.is-secondary { background:rgba(0,0,0,0.03) !important; border:1px solid var(--glass-border) !important; color:var(--ink-soft) !important; }    
    .nav2-footer-action-btn.is-secondary:hover { background:rgba(0,0,0,0.06) !important; border-color:rgba(0,0,0,0.14) !important; color:var(--ink-strong) !important; }    
    .nav2-footer-action-btn i { width:13px !important; height:13px !important; }    
    
    /* ── FURNISHED / UNFURNISHED TOGGLE ── */    
    #immersive-furnished-toggle, #immersive-furnished-toggle * { font-family:'Inter',sans-serif !important; box-sizing:border-box; outline:none !important; }    
    #immersive-furnished-toggle {    
      --furnish-surface: rgba(12,10,9,0.88); --furnish-border: rgba(255,255,255,0.09); --furnish-blur: 14px;    
      --furnish-ink-soft: rgba(245,242,236,0.58); --furnish-ink-strong: #F5F2EC;    
      --furnish-radius: 999px; --ease: cubic-bezier(0.22,0.61,0.36,1);    
      position:relative !important; width:100% !important; min-width:0 !important; z-index:auto !important; pointer-events:none !important; display:none; opacity:0; transform:none; transition:opacity 280ms var(--ease);    
    }    
    #immersive-furnished-toggle.hud-ready { opacity:1 !important; display:block !important; }    
    .furnished-toggle-panel { display:flex !important; gap:8px !important; width:100% !important; min-width:0 !important; background:transparent !important; border:none !important; border-radius:0 !important; box-shadow:none !important; padding:0 !important; pointer-events:auto !important; }    
    .furnished-toggle-btn { flex:1 !important; min-width:0 !important; min-height:44px !important; padding:10px 16px !important; border-radius:var(--furnish-radius) !important; background:var(--furnish-surface) !important; backdrop-filter:blur(var(--furnish-blur)) saturate(130%) !important; -webkit-backdrop-filter:blur(var(--furnish-blur)) saturate(130%) !important; border:1px solid var(--furnish-border) !important; box-shadow:0 32px 64px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05) !important; color:var(--furnish-ink-soft) !important; font-size:11px !important; font-weight:500 !important; letter-spacing:1.1px !important; text-transform:uppercase !important; cursor:pointer !important; transition:all 220ms var(--ease) !important; }    
    .furnished-toggle-btn:hover { color:var(--furnish-ink-strong) !important; background:rgba(12,10,9,0.94) !important; }    
    .furnished-toggle-btn.is-active { background:#34d399 !important; border-color:#34d399 !important; color:#052e1f !important; font-weight:700 !important; box-shadow:0 10px 24px rgba(52,211,153,0.4) !important; }    
    
    /* ── LEASE COST CALCULATOR ── */    
    #hud-cost-calculator-root, #hud-cost-calculator-root * { font-family:'Inter',sans-serif !important; box-sizing:border-box; outline:none !important; }    
    #hud-cost-calculator-root {    
      position:fixed !important; bottom:16px !important; right:16px !important; z-index:2147483640 !important; width:430px !important; max-width:calc(100vw - 32px) !important;    
      background:rgba(8,6,5,0.92) !important; backdrop-filter:blur(12px) saturate(120%) !important; -webkit-backdrop-filter:blur(12px) saturate(120%) !important;    
      border:1px solid rgba(255,255,255,0.08) !important; border-radius:28px !important; box-shadow:0 40px 80px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.05) !important;    
      padding:24px 26px !important; display:none !important; opacity:0 !important; transform:scale(0.95) translateY(6px) !important; transition:all 0.4s cubic-bezier(0.215,0.61,0.355,1) !important; pointer-events:auto !important;    
    }    
    #hud-cost-calculator-root.is-visible { display:block !important; opacity:1 !important; transform:scale(1) translateY(0) !important; }    
    .calc-absolute-close-btn { position:absolute !important; top:22px !important; right:24px !important; width:30px !important; height:30px !important; border-radius:50% !important; background:rgba(255,255,255,0.03) !important; border:1px solid rgba(255,255,255,0.08) !important; color:rgba(255,255,255,0.4) !important; display:flex !important; align-items:center !important; justify-content:center !important; cursor:pointer !important; transition:all 0.3s cubic-bezier(0.16,1,0.3,1) !important; }    
    .calc-absolute-close-btn:hover { background:#fff !important; border-color:#fff !important; color:#0c0a09 !important; }    
    .calc-section-label { font-size:10px !important; font-weight:500 !important; color:rgba(245,242,236,0.34) !important; letter-spacing:1.6px !important; text-transform:uppercase !important; margin-bottom:10px !important; display:block; }    
    .calc-read-only-grid { display:grid !important; grid-template-columns:repeat(3, 1fr) !important; gap:8px !important; background:rgba(0,0,0,0.18) !important; padding:12px !important; border-radius:14px !important; border:1px solid rgba(255,255,255,0.04) !important; margin-bottom:18px !important; }    
    .calc-read-cell { display:flex !important; flex-direction:column !important; gap:4px !important; }    
    .calc-read-label { font-size:9px !important; font-weight:400; color:rgba(245,242,236,0.4) !important; text-transform:uppercase; letter-spacing:0.5px; }    
    .calc-read-val { font-size:12.5px !important; font-weight:500; color:#F5F2EC !important; }    
    .calc-term-pill-row { display:flex !important; gap:6px !important; margin-bottom:12px !important; }    
    .calc-term-pill { flex:1 !important; height:36px !important; border-radius:10px !important; background:rgba(255,255,255,0.03) !important; border:1px solid rgba(255,255,255,0.07) !important; color:rgba(245,242,236,0.5) !important; font-size:11px !important; font-weight:400 !important; cursor:pointer !important; transition:all 200ms ease !important; }    
    .calc-term-pill:hover { background:rgba(255,255,255,0.08) !important; color:#fff !important; }    
    .calc-term-pill.is-active { background:#34d399 !important; border-color:#34d399 !important; color:#052e1f !important; font-weight:700 !important; }    
    .calc-custom-input-box { height:40px !important; border-radius:10px !important; background:rgba(0,0,0,0.22) !important; border:1px solid rgba(255,255,255,0.08) !important; padding:0 14px !important; color:#fff !important; font-size:12.5px !important; width:100% !important; margin-bottom:18px !important; display:none; }    
    .calc-custom-input-box:focus { border-color:rgba(255,255,255,0.3) !important; }    
    .calc-sales-field-wrapper { position:relative !important; margin-bottom:18px !important; }    
    .calc-sales-currency-prefix { position:absolute !important; left:14px !important; top:50%; transform:translateY(-50%) !important; color:rgba(245,242,236,0.3) !important; font-size:13px !important; font-weight:400 !important; pointer-events:none !important; }    
    .calc-sales-input { width:100% !important; height:42px !important; border-radius:12px !important; background:rgba(0,0,0,0.22) !important; border:1px solid rgba(255,255,255,0.08) !important; padding:0 14px 0 32px !important; color:#fff !important; font-size:13px !important; font-weight:400 !important; transition:all 220ms ease !important; }    
    .calc-sales-input:focus { border-color:rgba(255,255,255,0.3) !important; background:rgba(0,0,0,0.35) !important; }    
    .calc-sales-input::placeholder { color:rgba(245,242,236,0.25) !important; }    
    .calc-summary-card { background:rgba(255,255,255,0.015) !important; border:1px solid rgba(255,255,255,0.04) !important; border-radius:18px !important; padding:16px !important; display:flex !important; flex-direction:column !important; gap:9px !important; }    
    .calc-summary-line { display:flex !important; justify-content:space-between !important; align-items:center !important; font-size:12px !important; color:rgba(245,242,236,0.45) !important; font-weight:300 !important; min-height:18px; }    
    .calc-summary-line strong { color:rgba(245,242,236,0.9) !important; font-weight:400 !important; }    
    .calc-divider-dashed { border:none !important; border-top:1px dashed rgba(255,255,255,0.1) !important; margin:4px 0 !important; height:0px !important; }    
    .calc-total-headline { display:flex !important; flex-direction:column !important; gap:1px !important; border-top:1px solid rgba(255,255,255,0.08) !important; padding-top:10px !important; margin-top:2px !important; }    
    
    .premium-directory-panel,    
    .nav2-main-panel { scrollbar-width:auto !important; scrollbar-color:rgba(0,0,0,0.38) rgba(0,0,0,0.06) !important; }    
    .premium-directory-panel::-webkit-scrollbar,    
    .nav2-main-panel::-webkit-scrollbar { width:8px !important; }    
    .premium-directory-panel::-webkit-scrollbar-track,    
    .nav2-main-panel::-webkit-scrollbar-track { background:rgba(0,0,0,0.06) !important; border-radius:99px !important; margin:4px 0 !important; }    
    .premium-directory-panel::-webkit-scrollbar-thumb,    
    .nav2-main-panel::-webkit-scrollbar-thumb { background:rgba(0,0,0,0.38) !important; border-radius:99px !important; border:2px solid transparent !important; background-clip:padding-box !important; }    
    .premium-directory-panel::-webkit-scrollbar-thumb:hover,    
    .nav2-main-panel::-webkit-scrollbar-thumb:hover { background:rgba(0,0,0,0.55) !important; background-clip:padding-box !important; }    
    
    @media (max-width: 1280px) {    
      #immersive-canvas-nav1, #immersive-canvas-nav2 { --nav-glass-radius-expanded: 16px; --nav-glass-radius-collapsed: 999px; }    
      #immersive-canvas-nav1 .nav-glass-shell { width:272px !important; }    
      #immersive-canvas-nav2 .nav-glass-shell { width:288px !important; }    
      #immersive-canvas-nav1.hud-ready, #immersive-canvas-nav2.hud-ready { gap:6px !important; }    
      #immersive-canvas-nav1 .premium-directory-panel { padding:16px !important; gap:14px !important; }    
      #immersive-canvas-nav1 .nav-collapsed-pill { min-height:52px !important; padding:10px 14px !important; }    
      #immersive-canvas-nav1 .nav-collapsed-title, #immersive-canvas-nav2 .nav-collapsed-title { font-size:14px !important; }    
      #immersive-canvas-nav1 .meta-title { font-size:15px !important; }    
      #immersive-canvas-nav1 .meta-title .level-name { font-size:12px !important; }    
      #immersive-canvas-nav1 .nav1-section-label { font-size:9px !important; margin-bottom:8px !important; }    
      #immersive-canvas-nav1 .floor-search-input { height:36px !important; font-size:11.5px !important; padding:0 14px 0 36px !important; }    
      #immersive-canvas-nav1 .floor-search-shell .floor-search-icon { left:12px !important; width:12px !important; height:12px !important; }    
      #immersive-canvas-nav1 .nav-collapse-btn, #immersive-canvas-nav2 .nav-collapse-btn { width:30px !important; height:30px !important; }    
      #immersive-canvas-nav1 .icon-badge-box { width:30px !important; height:30px !important; }    
      #immersive-canvas-nav1 .nav-arrow-btn { width:30px !important; height:30px !important; }    
      #immersive-canvas-nav1 .floor-caro-item { height:30px !important; font-size:10px !important; }    
      #immersive-canvas-nav1 .nav1-footer-action-btn { min-height:36px !important; padding:8px 12px !important; font-size:10px !important; }    
      #immersive-canvas-nav1 .leasing-stat { padding:10px 11px !important; }    
      #immersive-canvas-nav1 .leasing-stat-value { font-size:14px !important; }    
      #immersive-canvas-nav2 .nav-collapsed-pill { min-height:52px !important; padding:10px 14px !important; }    
      #immersive-canvas-nav2 .nav2-section { padding:14px 16px !important; }    
      #immersive-canvas-nav2 .nav2-unit-title { font-size:20px !important; }    
      #immersive-canvas-nav2 .nav2-action-footer-row { padding:12px 16px 14px !important; }    
      #immersive-canvas-nav2 .nav2-footer-action-btn { min-height:36px !important; padding:8px 12px !important; font-size:10px !important; }    
      .furnished-toggle-btn { min-height:34px !important; padding:7px 10px !important; font-size:9.5px !important; letter-spacing:0.7px !important; }    
      .furnished-toggle-panel { gap:5px !important; }    
    }    
  
    @media (max-width: 768px) {    
      .furnished-toggle-panel     { width:100% !important; justify-content:center !important; }    
      .furnished-toggle-btn       { flex:1 !important; }    
      #immersive-canvas-nav1, #immersive-canvas-nav2 { top:var(--hud-corner-inset, 12px) !important; left:var(--hud-corner-inset, 12px) !important; right:var(--hud-corner-inset, 12px) !important; bottom:auto !important; max-height:calc(100vh - (var(--hud-corner-inset, 12px) * 2)) !important; }    
      .nav-glass-shell { width:100% !important; border-radius:var(--nav-glass-radius-expanded) !important; }    
      .premium-directory-panel, .nav2-main-panel { width:100% !important; padding:20px !important; }    
      .nav-collapsed-pill { padding:12px 16px !important; }    
      .nav-collapsed-title { font-size:15px !important; }    
      .nav-expand-btn { font-size:10px !important; }    
      #hud-cost-calculator-root { width:calc(100% - 32px) !important; right:16px !important; left:16px !important; bottom:16px !important; padding:20px !important; border-radius:22px !important; }    
    }    
  `;    
  document.head.appendChild(styleTag);    
    
  /* ── HUD LAYER (re-parented into fullscreen element when 3DVista goes fullscreen) ── */    
  var hudLayer = document.createElement('div');    
  hudLayer.id = 'immersive-hud-layer';    
  document.body.appendChild(hudLayer);    
    
  var panoTransitionMask = document.createElement('div');    
  panoTransitionMask.id = 'immersive-pano-transition-mask';    
  hudLayer.appendChild(panoTransitionMask); // must stay first so it sits beneath the HUD panels    
    
  function getHudLayer() { return sel('immersive-hud-layer'); }    
    
  var panoMaskWatchdog = null;    
    
  // ── SNAPSHOT-BASED CROSSFADE ──    
  // 3DVista renders one live panorama; there's no second pano to    
  // genuinely cross-blend against. So instead of a flat black card, we    
  // grab a still image of the *actual last-seen frame* from the tour's    
  // own <canvas>, park it on the mask, fade that in (invisible, since    
  // it's a photo of what's already on screen), swap the panorama    
  // underneath while it's hidden behind the still, then fade the still    
  // back out — which reads as the old view dissolving into the new one.    
  function findTourCanvas() {    
    try {    
      var canvases = document.getElementsByTagName('canvas');    
      var best = null, bestArea = 0;    
      for (var i = 0; i < canvases.length; i++) {    
        var c = canvases[i];    
        var area = (c.width || 0) * (c.height || 0);    
        if (area > bestArea) { bestArea = area; best = c; }    
      }    
      return best;    
    } catch (e) { return null; }    
  }    
    
  // Returns a data URL of the current tour frame, or null if it can't    
  // be captured. Wrapped defensively because this can fail for reasons    
  // outside our control — a WebGL context created without    
  // preserveDrawingBuffer reads back blank, and a canvas painted with    
  // cross-origin panorama textures lacking CORS headers throws a    
  // SecurityError ("tainted canvas") on toDataURL. Either way we return    
  // null so the caller falls back to a plain fade-to-black instead of    
  // breaking navigation.    
  function captureTourFrameDataUrl() {    
    try {    
      var canvas = findTourCanvas();    
      if (!canvas || !canvas.width || !canvas.height) return null;    
      var dataUrl = canvas.toDataURL('image/jpeg', 0.86);    
      if (!dataUrl || dataUrl.indexOf('data:image') !== 0 || dataUrl.length < 1000) return null;    
      return dataUrl;    
    } catch (e) {    
      return null;    
    }    
  }    
    
  function applyMaskSnapshot(mask) {    
    var snapshot = captureTourFrameDataUrl();    
    if (snapshot) mask.style.setProperty('background-image', 'url(' + snapshot + ')', 'important');    
    else mask.style.setProperty('background-image', 'none', 'important'); // falls back to the plain background-color    
  }    
    
  function showPanoTransitionMaskInstant() {    
    var mask = sel('immersive-pano-transition-mask');    
    if (!mask) return;    
    applyMaskSnapshot(mask);    
    mask.style.setProperty('transition', 'none', 'important');    
    mask.style.setProperty('opacity', '1', 'important');    
    void mask.offsetHeight; // force reflow so the instant show is never accidentally animated    
    clearTimeout(panoMaskWatchdog);    
    panoMaskWatchdog = setTimeout(function () { hidePanoTransitionMaskFade(300); }, 3000); // failsafe, never stays stuck    
  }    
    
  // Gently fades the mask (showing a still of the current frame) to    
  // fully opaque instead of snapping it on. Any camera/pano change    
  // should happen only once this fade completes (i.e. after    
  // durationMs), so the viewer never sees the raw yaw/pitch snap or    
  // panorama swap underneath — only the crossfade.    
  //    
  // Uses setProperty(..., 'important') rather than a plain style    
  // assignment: the base rule for this element is opacity:0 — if that    
  // rule is ever changed back to !important (or any other stylesheet    
  // targets this id with !important), a plain style.opacity write is    
  // powerless against it and the mask silently never appears, even    
  // though every timer/poll in this file still fires "correctly".    
  function fadeInPanoTransitionMask(durationMs) {    
    var mask = sel('immersive-pano-transition-mask');    
    if (!mask) return;    
    clearTimeout(panoMaskWatchdog);    
    applyMaskSnapshot(mask);    
    mask.style.setProperty('transition', 'opacity ' + (durationMs || 220) + 'ms ease', 'important');    
    mask.style.setProperty('opacity', '1', 'important');    
    panoMaskWatchdog = setTimeout(function () { hidePanoTransitionMaskFade(300); }, 3000); // failsafe, never stays stuck    
  }    
    
  function hidePanoTransitionMaskFade(durationMs) {    
    var mask = sel('immersive-pano-transition-mask');    
    if (!mask) return;    
    clearTimeout(panoMaskWatchdog);    
    mask.style.setProperty('transition', 'opacity ' + (durationMs || 260) + 'ms ease', 'important');    
    mask.style.setProperty('opacity', '0', 'important');    
  }    
    
  function getFullscreenElement() {    
    return document.fullscreenElement ||    
      document.webkitFullscreenElement ||    
      document.webkitCurrentFullScreenElement ||    
      document.mozFullScreenElement ||    
      document.msFullscreenElement ||    
      null;    
  }    
    
  function findTourDisplayContainer() {    
    var fs = getFullscreenElement();    
    if (fs) return fs;    
    var player = getPlayer();    
    if (player) {    
      if (player.container && player.container.nodeType === 1) return player.container;    
      if (player.div && player.div.nodeType === 1) return player.div;    
      if (player.el && player.el.nodeType === 1) return player.el;    
      if (player.parent && player.parent.nodeType === 1) return player.parent;    
    }    
    var selectors = ['#player', '#vtour', '#viewer', '#pano', '.player', '.vtour', '[class*="fullscreen"]'];    
    for (var i = 0; i < selectors.length; i++) {    
      try {    
        var el = document.querySelector(selectors[i]);    
        if (el && el !== document.body && el !== document.documentElement) return el;    
      } catch (e) {}    
    }    
    return document.body;    
  }    
    
  function ensureHudLayerMounted() {    
    var layer = getHudLayer();    
    if (!layer) return;    
    var target = findTourDisplayContainer() || document.body;    
    if (layer.parentNode !== target) target.appendChild(layer);    
    layer.style.setProperty('position', 'fixed', 'important');    
    layer.style.setProperty('top', '0', 'important');    
    layer.style.setProperty('left', '0', 'important');    
    layer.style.setProperty('width', '100%', 'important');    
    layer.style.setProperty('height', '100%', 'important');    
    layer.style.setProperty('z-index', '2147483646', 'important');    
    layer.style.setProperty('pointer-events', 'none', 'important');    
    layer.style.setProperty('overflow', 'visible', 'important');    
    checkHUDVisibilityNav1();    
    checkHUDVisibilityNav2();    
    checkFurnishedToggleVisibility();    
  }    
    
  function initFullscreenHudPersistence() {    
    var events = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'];    
    events.forEach(function (ev) {    
      document.addEventListener(ev, function () {    
        ensureHudLayerMounted();    
        setTimeout(ensureHudLayerMounted, 50);    
        setTimeout(ensureHudLayerMounted, 250);    
        setTimeout(ensureHudLayerMounted, 600);    
      });    
    });    
    window.addEventListener('resize', ensureHudLayerMounted);    
    setInterval(ensureHudLayerMounted, 400);    
  }    
    
  /* ── BUILD NAV 1 DOM ── */    
  var canvasNav1 = document.createElement('div');    
  canvasNav1.id = 'immersive-canvas-nav1';    
  canvasNav1.innerHTML = `    
    <div class="nav-glass-shell">    
    <div class="premium-directory-panel">    
      <div>    
        <div class="header-row-nav1">    
          <div class="icon-badge-box"><i data-lucide="compass" style="width:15px;height:15px;"></i></div>    
          <div class="meta-text-block">    
            <span class="meta-subtitle">Active Level</span>    
            <span class="meta-title"><span id="active-floor-label">--</span><span class="level-name" id="active-floor-name">--</span></span>    
          </div>    
          <button class="nav-collapse-btn" id="nav1-collapse-btn" type="button" aria-label="Collapse navigation"><i data-lucide="minimize-2" style="width:16px;height:16px;"></i></button>    
        </div>    
        <p class="meta-helper">Select a floor to begin exploring.</p>    
      </div>    
      <hr class="nav1-divider">    
      <div>    
        <span class="nav1-section-label">Floor Navigation</span>    
        <div class="carousel-container">    
          <button class="nav-arrow-btn" id="caro-prev-btn" type="button"><i data-lucide="chevron-left" style="width:16px;height:16px;"></i></button>    
          <div class="carousel-track" id="caro-floor-track"></div>    
          <button class="nav-arrow-btn" id="caro-next-btn" type="button"><i data-lucide="chevron-right" style="width:16px;height:16px;"></i></button>    
        </div>    
      </div>    
      <hr class="nav1-divider">    
      <div>    
        <span class="nav1-section-label">Search</span>    
        <div class="floor-search-shell">    
          <i data-lucide="search" class="floor-search-icon"></i>    
          <input type="text" class="floor-search-input" id="floor-search-input" placeholder="Search shop, unit, or floor...">    
        </div>    
      </div>    
      <hr class="nav1-divider">    
      <div>    
        <span class="nav1-section-label">Primary Actions</span>    
        <div class="nav1-action-footer-row">    
          <button class="nav1-footer-action-btn is-secondary" id="nav1-action-floorplan" type="button"><i data-lucide="map" style="width:13px;height:13px;"></i><span>Floorplan</span></button>    
        </div>    
      </div>    
      <hr class="nav1-divider">    
      <div class="leasing-info-card" id="leasing-info-card">    
        <div class="leasing-stat"><span class="leasing-stat-label"><i data-lucide="door-open" style="width:11px;height:11px;"></i>Available Units</span><span class="leasing-stat-value" id="leasing-stat-units">--</span></div>    
        <div class="leasing-stat"><span class="leasing-stat-label"><i data-lucide="trending-up" style="width:11px;height:11px;"></i>Occupancy</span><span class="leasing-stat-value" id="leasing-stat-occupancy">--</span></div>    
        <div class="leasing-stat"><span class="leasing-stat-label"><i data-lucide="ruler" style="width:11px;height:11px;"></i>Retail Area</span><span class="leasing-stat-value" id="leasing-stat-area">--</span></div>    
        <div class="leasing-stat"><span class="leasing-stat-label"><i data-lucide="square" style="width:11px;height:11px;"></i>Avg. Unit Size</span><span class="leasing-stat-value" id="leasing-stat-avgsize">--</span></div>    
      </div>    
    </div>    
    <div class="nav-collapsed-pill" aria-label="Collapsed floor navigation">    
      <span class="nav-collapsed-title" id="nav1-collapsed-title">Floor Navigation</span>    
      <button class="nav-expand-btn" id="nav1-expand-btn" type="button">Expand</button>    
    </div>    
    </div>    
    <div class="nav-furnish-footer"></div>    
  `;    
  hudLayer.appendChild(canvasNav1);    
    
  /* ── BUILD NAV 2 DOM ── */    
  var canvasNav2 = document.createElement('div');    
  canvasNav2.id = 'immersive-canvas-nav2';    
  canvasNav2.innerHTML = `    
    <div class="nav-glass-shell">    
    <div class="nav2-main-panel">    
      <div class="nav2-section">    
        <div class="nav2-panel-header">    
          <div class="nav2-panel-header-main">    
            <div class="nav2-badge-row">    
              <span class="nav2-badge is-available">Available Now</span>    
              <span class="nav2-badge is-bare" id="nav2-badge-condition">--</span>    
            </div>    
            <div class="nav2-unit-title" id="nav2-unit-title">--</div>    
            <div class="nav2-unit-sub" id="nav2-unit-sub">--</div>    
          </div>    
          <button class="nav-collapse-btn" id="nav2-collapse-btn" type="button" aria-label="Collapse navigation"><i data-lucide="minimize-2" style="width:16px;height:16px;"></i></button>    
        </div>    
        <div class="nav2-chip-row">    
          <span class="nav2-chip"><i data-lucide="maximize-2" style="width:11px;height:11px;"></i><span id="nav2-chip-area">--</span></span>    
          <span class="nav2-chip"><i data-lucide="zap" style="width:11px;height:11px;"></i><span>Ready for Fit-out</span></span>    
          <span class="nav2-chip"><i data-lucide="layers" style="width:11px;height:11px;"></i><span id="nav2-chip-floor">--</span></span>    
        </div>    
      </div>    
      <div class="nav2-section">    
        <div class="nav2-eyebrow"><i data-lucide="sparkles" style="width:11px;height:11px;"></i>Why This Space</div>    
        <div class="nav2-benefit-list" id="nav2-benefits-container"></div>    
      </div>    
      <div class="nav2-section">    
        <div class="nav2-eyebrow"><i data-lucide="bar-chart-2" style="width:11px;height:11px;"></i>Quick Facts</div>    
        <div class="nav2-facts-grid">    
          <div class="nav2-fact-card">    
            <div class="nav2-fact-label"><i data-lucide="users" style="width:10px;height:10px;"></i>Capacity</div>    
            <div class="nav2-fact-value" id="nav2-fact-capacity">--</div>    
          </div>    
          <div class="nav2-fact-card">    
            <div class="nav2-fact-label"><i data-lucide="arrow-up" style="width:10px;height:10px;"></i>Ceiling Height</div>    
            <div class="nav2-fact-value" id="nav2-fact-ceiling">--</div>    
          </div>    
          <div class="nav2-fact-card">    
            <div class="nav2-fact-label"><i data-lucide="layout" style="width:10px;height:10px;"></i>Condition</div>    
            <div class="nav2-fact-value" id="nav2-fact-condition">--</div>    
          </div>    
          <div class="nav2-fact-card">    
            <div class="nav2-fact-label"><i data-lucide="sliders" style="width:10px;height:10px;"></i>Customization</div>    
            <div class="nav2-fact-value" id="nav2-fact-customization">--</div>    
          </div>    
        </div>    
      </div>    
      <div class="nav2-section">    
        <div class="nav2-eyebrow"><i data-lucide="layout-grid"></i>Fit-Out Blueprint</div>    
        <div class="nav2-blueprint-grid" id="nav2-blueprint-buttons-track"></div>    
      </div>    
      <div class="nav2-action-footer-row">    
        <button class="nav2-footer-action-btn is-secondary" id="nav2-action-floorplan" type="button"><i data-lucide="map"></i><span>Floorplan</span></button>    
        <button class="nav2-footer-action-btn is-secondary" id="nav2-action-calc" type="button"><i data-lucide="calculator"></i><span>Calculator</span></button>    
      </div>    
    </div>    
    <div class="nav-collapsed-pill" aria-label="Collapsed unit navigation">    
      <span class="nav-collapsed-title" id="nav2-collapsed-title">Unit Details</span>    
      <button class="nav-expand-btn" id="nav2-expand-btn" type="button">Expand</button>    
    </div>    
    </div>    
    <div class="nav-furnish-footer"></div>    
  `;    
  hudLayer.appendChild(canvasNav2);    
    
  /* ── FURNISHED / UNFURNISHED TOGGLE ── */    
  var canvasFurnishedToggle = document.createElement('div');    
  canvasFurnishedToggle.id = 'immersive-furnished-toggle';    
  canvasFurnishedToggle.innerHTML = `    
    <div class="furnished-toggle-panel">    
      <button class="furnished-toggle-btn" id="furnished-toggle-furnished" type="button">Furnished</button>    
      <button class="furnished-toggle-btn" id="furnished-toggle-unfurnished" type="button">Unfurnished</button>    
    </div>    
  `;    
    
  function mountFurnishedToggle() {    
    var toggle = sel('immersive-furnished-toggle');    
    if (!toggle) return;    
    var hostNav = state.nav1Visible ? sel('immersive-canvas-nav1') : (state.nav2Visible ? sel('immersive-canvas-nav2') : null);    
    if (!hostNav) return;    
    var footer = hostNav.querySelector('.nav-furnish-footer');    
    if (footer && toggle.parentElement !== footer) footer.appendChild(toggle);    
  }    
  hudLayer.appendChild(canvasFurnishedToggle);    
    
  /* ── COMMERCIAL LEASE CALCULATOR DOM ── */    
  var calcContainer = document.createElement('div');    
  calcContainer.id = 'hud-cost-calculator-root';    
  calcContainer.innerHTML = `    
    <button id="hud-calc-close-x" class="calc-absolute-close-btn" type="button"><i data-lucide="x"></i></button>    
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-right:32px;">    
      <div class="icon-badge-box" style="width:34px;height:34px;background:rgba(255,255,255,0.05);"><i data-lucide="calculator" style="color:#fff;width:14px;height:14px;"></i></div>    
      <div style="display:flex;flex-direction:column;">    
        <span style="font-size:9px;font-weight:400;color:rgba(245,242,236,0.3);letter-spacing:1.8px;text-transform:uppercase;">Commercial Profile</span>    
        <span style="font-family:'Marcellus',serif;font-size:16px;font-weight:400;letter-spacing:1px;color:#fff;margin-top:1px;">Lease &amp; Turnover Tool</span>    
      </div>    
    </div>    
    <span class="calc-section-label">Property Information (Read-Only)</span>    
    <div class="calc-read-only-grid">    
      <div class="calc-read-cell"><span class="calc-read-label">Monthly Rent</span><span class="calc-read-val" id="calc-ro-rent">₱0</span></div>    
      <div class="calc-read-cell"><span class="calc-read-label">Floor Area</span><span class="calc-read-val" id="calc-ro-area">0 sqm</span></div>    
      <div class="calc-read-cell"><span class="calc-read-label">Rate / Sqm</span><span class="calc-read-val" id="calc-ro-rate">₱0/sqm</span></div>    
    </div>    
    <span class="calc-section-label">Lease Term Duration</span>    
    <div class="calc-term-pill-row">    
      <button class="calc-term-pill is-active" id="term-pill-12" type="button" data-mode="12">12 Mos</button>    
      <button class="calc-term-pill" id="term-pill-24" type="button" data-mode="24">24 Mos</button>    
      <button class="calc-term-pill" id="term-pill-36" type="button" data-mode="36">36 Mos</button>    
      <button class="calc-term-pill" id="term-pill-custom" type="button" data-mode="custom">Custom</button>    
    </div>    
    <input type="number" id="calc-custom-months-input" class="calc-custom-input-box" placeholder="Enter custom lease months..." min="1">    
    <span class="calc-section-label">Projected Monthly Performance</span>    
    <div class="calc-sales-field-wrapper">    
      <span class="calc-sales-currency-prefix">₱</span>    
      <input type="number" id="calc-gross-sales-input" class="calc-sales-input" placeholder="Estimated Monthly Gross Sales...">    
    </div>    
    <span class="calc-section-label">Results Section</span>    
    <div class="calc-summary-card">    
      <div style="font-size:10px;text-transform:uppercase;color:rgba(255,255,255,0.35);letter-spacing:0.8px;font-weight:500;">Estimated Monthly Payment</div>    
      <div class="calc-summary-line"><span>Base Rent</span><strong id="summary-base-rent">₱0</strong></div>    
      <div class="calc-summary-line" id="summary-row-variable"><span>3% of Gross Sales</span><strong id="summary-variable-sales">₱0</strong></div>    
      <div class="calc-summary-line" id="summary-row-variable-empty" style="display:none; color:rgba(245,242,236,0.35); font-style:italic;">    
        <span style="font-size:11px; line-height:1.4;">Additional Rent + 3% of Gross Sales (Calculated once business operations begin.)</span>    
      </div>    
      <hr class="calc-divider-dashed">    
      <div class="calc-summary-line">    
        <span style="font-weight:500; color:#fff;">Total Monthly Payment</span>    
        <strong id="summary-total-monthly" style="color:#fff; font-size:14px;">₱0</strong>    
      </div>    
      <div class="calc-total-headline">    
        <span style="font-size:9px;text-transform:uppercase;font-weight:400;letter-spacing:1.5px;color:rgba(245,242,236,0.34);" id="summary-label-term">Lease Term: 12 Months</span>    
        <div style="display:flex; justify-content:between; align-items:baseline; margin-top:3px;">    
          <span style="font-size:11px; color:rgba(245,242,236,0.5); font-weight:400; flex-grow:1;" id="summary-label-contract-desc">Estimated Contract Value</span>    
          <span style="font-size:20px;font-weight:300;color:#fff;letter-spacing:-0.5px;" id="summary-contract-value">₱0</span>    
        </div>    
      </div>    
    </div>    
  `;    
  hudLayer.appendChild(calcContainer);    
    
  /* ── RUNTIME ENGINE ── */    
  function renderCarouselNav1() {    
    var track = sel('caro-floor-track');    
    if (!track) return;    
    track.innerHTML = '';    
    var filteredFloors = FLOORS.filter(function (f) { return matchFloorShortTitle(f, state.floorSearchQuery); });    
    if (filteredFloors.length === 0) {    
      track.innerHTML = '<div style="width:100%;text-align:center;font-size:11px;color:rgba(255,255,255,0.3);text-transform:uppercase;">No floor found</div>';    
      return;    
    }    
    filteredFloors.forEach(function (floor) {    
      var btn = document.createElement('button');    
      btn.type = 'button';    
      btn.className = 'floor-caro-item' + (state.activeFloorId === floor.id ? ' is-active-level' : '');    
      btn.textContent = floor.shortTitle;    
      btn.onmousedown = function (e) {    
        e.preventDefault();    
        state.activeFloorId = floor.id;    
        setActiveUnitForFloorId(floor.id);    
        updateHUDStateNav1(true);    
      };    
      track.appendChild(btn);    
    });    
  }    
    
  function updateHUDStateNav1(shouldJump) {    
    var floor = getFloor();    
    setText('active-floor-label', floor.levelLabel || floor.title);    
    setText('active-floor-name',  floor.levelName  || '');    
    setText('nav1-collapsed-title', (floor.levelLabel || 'Floor') + ' Navigation');    
    if (floor.leasing) {    
      setText('leasing-stat-units',     String(floor.leasing.availableUnits));    
      setText('leasing-stat-occupancy', floor.leasing.occupancyPct + '%');    
      setText('leasing-stat-area',      floor.leasing.retailAreaSqm.toLocaleString() + ' sqm');    
      setText('leasing-stat-avgsize',   floor.leasing.avgUnitSqm + ' sqm');    
    }    
    renderCarouselNav1();    
    refreshIcons();    
    if (shouldJump) {    
      syncFurnishModeFromPanoramaName(floor.panoramaName);    
      goToPanorama(floor.panoramaName, false);    
    }    
  }    
    
  function checkHUDVisibilityNav1() {    
    var canvas = sel('immersive-canvas-nav1');    
    if (!canvas) return;    
    canvas.classList.toggle('is-collapsed', !!state.nav1Collapsed);    
    if (state.nav1Visible) {    
      if (canvas.style.display !== 'flex') canvas.style.setProperty('display','flex','important');    
      if (!canvas.classList.contains('hud-ready')) setTimeout(function () { canvas.classList.add('hud-ready'); }, 10);    
    } else {    
      canvas.classList.remove('hud-ready');    
      if (canvas.style.display !== 'none') canvas.style.setProperty('display','none','important');    
    }    
  }    
    
  function updateFurnishedToggleUI() {    
    var d = sel('furnished-toggle-furnished'), u = sel('furnished-toggle-unfurnished');    
    if (d) d.classList.toggle('is-active', state.furnishMode === 'furnished');    
    if (u) u.classList.toggle('is-active', state.furnishMode === 'unfurnished');    
  }    
    
function checkFurnishedToggleVisibility() {    
  var canvas = sel('immersive-furnished-toggle');    
  if (!canvas) return;    
  
  var currentPano = getCurrentPanoramaName();    
  var unitMatch = getBlueprintOptionForPanorama(currentPano);    
  
  var shouldShow = state.nav1Visible ||    
                   (state.nav2Visible && (hasActiveBlueprint() || !!unitMatch));    
  
  if (shouldShow) {    
    mountFurnishedToggle();    
    if (canvas.style.display !== 'block') canvas.style.setProperty('display', 'block', 'important');    
    if (!canvas.classList.contains('hud-ready')) setTimeout(function () { canvas.classList.add('hud-ready'); }, 10);    
  } else {    
    canvas.classList.remove('hud-ready');    
    canvas.style.setProperty('display', 'none', 'important');    
  }    
}    
    
  function renderBlueprintGridNav2() {    
    var track = sel('nav2-blueprint-buttons-track');    
    if (!track) return;    
    track.innerHTML = '';    
    var unit = getActiveUnit();    
    var options = getUnitBlueprintOptions(unit);    
    options.forEach(function (opt) {    
      var btn = document.createElement('button');    
      btn.type = 'button';    
      var isActive = (state.activeBlueprintId === opt.id);    
      btn.className = 'nav2-blueprint-btn' + (isActive ? ' is-active' : '') + (opt.disabled ? ' is-disabled' : '');    
      btn.innerHTML = '<span class="nav2-blueprint-label">' + opt.label + '</span><span class="nav2-blueprint-cost">&#8369;' + opt.cost + ' / sq ft</span>';    
      if (!opt.disabled) {    
        btn.onclick = function (e) {    
          e.preventDefault();    
          state.activeBlueprintId = opt.id;    
          state.furnishMode = 'furnished';    
          renderBlueprintGridNav2();    
          updateFurnishedToggleUI();    
          checkFurnishedToggleVisibility();    
          updateCalculator();    
          goToBlueprintOptionPanorama(opt, true);    
        };    
      }    
      track.appendChild(btn);    
    });    
  }    
    
  function renderAllNav2() {    
    var unit = getActiveUnit();    
    setText('nav2-unit-title', unit.title);    
    setText('nav2-unit-sub', unit.subTitle);    
    setText('nav2-collapsed-title', unit.title + ' Details');    
    setText('nav2-badge-condition', unit.conditionLabel);    
    setText('nav2-chip-area', unit.areaSqm + ' sqm');    
    setText('nav2-chip-floor', unit.floorLabel);    
    var benefitsContainer = sel('nav2-benefits-container');    
    if (benefitsContainer) {    
      benefitsContainer.innerHTML = '';    
      unit.benefits.forEach(function(benefitText) {    
        var bRow = document.createElement('div');    
        bRow.className = 'nav2-benefit-item';    
        bRow.innerHTML = '<div class="nav2-benefit-dot"><i data-lucide="check" style="width:9px;height:9px;stroke-width:3px;"></i></div><span>' + benefitText + '</span>';    
        benefitsContainer.appendChild(bRow);    
      });    
    }    
    setText('nav2-fact-capacity', unit.facts.capacity);    
    setText('nav2-fact-ceiling', unit.ceilingHeight);    
    setText('nav2-fact-condition', unit.facts.condition);    
    setText('nav2-fact-customization', unit.facts.customization);    
    if (state.activeBlueprintId && !getBlueprintOptionById(unit, state.activeBlueprintId)) state.activeBlueprintId = '';    
    renderBlueprintGridNav2();    
    updateCalculator();    
    refreshIcons();    
  }    
    
  function checkHUDVisibilityNav2() {    
    var canvas = sel('immersive-canvas-nav2');    
    if (!canvas) return;    
    canvas.classList.toggle('is-collapsed', !!state.nav2Collapsed);    
    if (state.nav2Visible) {    
      if (canvas.style.display !== 'flex') canvas.style.setProperty('display','flex','important');    
      if (!canvas.classList.contains('hud-ready')) setTimeout(function () { canvas.classList.add('hud-ready'); }, 10);    
    } else {    
      canvas.classList.remove('hud-ready');    
      if (canvas.style.display !== 'none') canvas.style.setProperty('display','none','important');    
    }    
  }    
    
  function initCalculatorDOMBindings() {    
    ['12', '24', '36', 'custom'].forEach(function(mode) {    
      var pill = sel('term-pill-' + mode);    
      if (pill) {    
        pill.onclick = function(e) {    
          e.preventDefault();    
          state.calc.leaseTermMode = mode;    
          ['12', '24', '36', 'custom'].forEach(function(m) { sel('term-pill-' + m).classList.toggle('is-active', m === mode); });    
          var customField = sel('calc-custom-months-input');    
          if (customField) customField.style.display = (mode === 'custom') ? 'block' : 'none';    
          updateCalculator();    
        };    
      }    
    });    
    var customMonthsInput = sel('calc-custom-months-input');    
    if (customMonthsInput) { customMonthsInput.oninput = function() { state.calc.customMonths = Math.max(1, parseInt(this.value) || 0); updateCalculator(); }; }    
    var salesInput = sel('calc-gross-sales-input');    
    if (salesInput) { salesInput.oninput = function() { state.calc.grossSalesInput = this.value; updateCalculator(); }; }    
    sel('hud-calc-close-x').onclick = function () { window.toggleImmersiveCalculator?.(); };    
  }    
    
  function updateCalculator() {    
    var unit = getActiveUnit();    
    var baseRent = unit.monthlyRentPhp || 0;    
    var area = unit.areaSqm || 1;    
    var ratePerSqm = Math.round(baseRent / area);    
    setText('calc-ro-rent', '₱' + baseRent.toLocaleString());    
    setText('calc-ro-area', area.toLocaleString() + ' sqm');    
    setText('calc-ro-rate', '₱' + ratePerSqm.toLocaleString() + '/sqm');    
    var leaseMonths = 12;    
    if (state.calc.leaseTermMode === '12') leaseMonths = 12;    
    else if (state.calc.leaseTermMode === '24') leaseMonths = 24;    
    else if (state.calc.leaseTermMode === '36') leaseMonths = 36;    
    else if (state.calc.leaseTermMode === 'custom') leaseMonths = state.calc.customMonths;    
    setText('summary-label-term', 'Lease Term ' + leaseMonths + ' Months');    
    setText('summary-base-rent', '₱' + baseRent.toLocaleString());    
    var isSalesEmpty = (state.calc.grossSalesInput === null || state.calc.grossSalesInput === undefined || state.calc.grossSalesInput.trim() === '');    
    var totalMonthlyPayment = baseRent;    
    var contractValue = 0;    
    if (isSalesEmpty) {    
      if (sel('summary-row-variable')) sel('summary-row-variable').style.display = 'none';    
      if (sel('summary-row-variable-empty')) sel('summary-row-variable-empty').style.setProperty('display', 'flex', 'important');    
      totalMonthlyPayment = baseRent;    
      contractValue = baseRent * leaseMonths;    
      setText('summary-label-contract-desc', 'Estimated Contract Value Based on base rent only.');    
    } else {    
      if (sel('summary-row-variable')) sel('summary-row-variable').style.setProperty('display', 'flex', 'important');    
      if (sel('summary-row-variable-empty')) sel('summary-row-variable-empty').style.display = 'none';    
      var estimatedSales = parseFloat(state.calc.grossSalesInput) || 0;    
      var variableComponent = Math.round(estimatedSales * 0.03);    
      totalMonthlyPayment = baseRent + variableComponent;    
      contractValue = totalMonthlyPayment * leaseMonths;    
      setText('summary-variable-sales', '₱' + variableComponent.toLocaleString());    
      setText('summary-label-contract-desc', 'Estimated Contract Value');    
    }    
    setText('summary-total-monthly', '₱' + totalMonthlyPayment.toLocaleString());    
    setText('summary-contract-value', '₱' + contractValue.toLocaleString());    
  }    
    
  function refreshIcons() {    
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();    
  }    
    
  function collapseNavigation1() { state.nav1Collapsed = true; checkHUDVisibilityNav1(); checkFurnishedToggleVisibility(); refreshIcons(); }    
  function expandNavigation1()   { state.nav1Collapsed = false; checkHUDVisibilityNav1(); checkFurnishedToggleVisibility(); refreshIcons(); }    
  function collapseNavigation2() { state.nav2Collapsed = true; checkHUDVisibilityNav2(); checkFurnishedToggleVisibility(); window.hideImmersiveCalculator?.(); refreshIcons(); }    
  function expandNavigation2()   { state.nav2Collapsed = false; checkHUDVisibilityNav2(); checkFurnishedToggleVisibility(); refreshIcons(); }    
    
  function setupUnifiedEvents() {    
    sel('caro-prev-btn').onclick = function () {    
      var idx = FLOORS.findIndex(function (f) { return f.id === state.activeFloorId; });    
      var prevFloor = idx > 0 ? FLOORS[idx - 1] : FLOORS[FLOORS.length - 1];    
      state.activeFloorId = prevFloor.id; setActiveUnitForFloorId(prevFloor.id); updateHUDStateNav1(true);    
    };    
    sel('caro-next-btn').onclick = function () {    
      var idx = FLOORS.findIndex(function (f) { return f.id === state.activeFloorId; });    
      var nextFloor = idx < FLOORS.length - 1 ? FLOORS[idx + 1] : FLOORS[0];    
      state.activeFloorId = nextFloor.id; setActiveUnitForFloorId(nextFloor.id); updateHUDStateNav1(true);    
    };    
    sel('nav1-action-floorplan').onclick = function (e) { e.preventDefault(); toggleExternalFloorplanIframe(); };    
    sel('nav2-action-floorplan').onclick = function (e) { e.preventDefault(); toggleExternalFloorplanIframe(); };    
    sel('nav2-action-calc').onclick      = function (e) { e.preventDefault(); window.toggleImmersiveCalculator?.(); };    
    sel('nav1-collapse-btn').onclick     = function (e) { e.preventDefault(); collapseNavigation1(); };    
    sel('nav1-expand-btn').onclick       = function (e) { e.preventDefault(); expandNavigation1(); };    
    sel('nav2-collapse-btn').onclick     = function (e) { e.preventDefault(); collapseNavigation2(); };    
    sel('nav2-expand-btn').onclick       = function (e) { e.preventDefault(); expandNavigation2(); };    
    var floorSearchInput = sel('floor-search-input');    
    if (floorSearchInput) {    
      floorSearchInput.oninput = function (e) {    
        state.floorSearchQuery = e.target.value;    
        renderCarouselNav1();    
        var matches = FLOORS.filter(function (f) { return matchFloorShortTitle(f, state.floorSearchQuery); });    
        if (matches.length > 0 && !matches.some(function (m) { return m.id === state.activeFloorId; })) {    
          state.activeFloorId = matches[0].id; setActiveUnitForFloorId(matches[0].id); updateHUDStateNav1(false);    
        }    
      };    
      floorSearchInput.onkeydown = function (e) { if (e.key !== 'Enter') return; e.preventDefault(); openSearchResult(e.target.value); };    
    }    
    sel('furnished-toggle-furnished').onclick   = function (e) { e.preventDefault(); goToFurnishMode('furnished'); };    
    sel('furnished-toggle-unfurnished').onclick = function (e) { e.preventDefault(); goToFurnishMode('unfurnished'); };    
    window.addEventListener('hashchange', function () {    
      if (navigationInProgress) return;    
      syncNavigation1ToCurrentPanorama();    
    });    
    initCalculatorDOMBindings();    
  }    
    
    
  /* ── 3DVISTA PANORAMA ENTRY HELPERS ── */    
  function resolvePanoramaForFurnishMode(mediaName, mode) {    
    var name = String(mediaName || '');    
    if (!name || !mode) return '';    
    
    var i, floor, unitId, unit, opts, j, opt;    
    for (i = 0; i < FLOORS.length; i++) {    
      floor = FLOORS[i];    
      if (panoramaNameMatches(name, floor.panoramaName) ||    
          panoramaNameMatches(name, floor.panoramaNameFurnished) ||    
          panoramaNameMatches(name, floor.panoramaNameUnfurnished)) {    
        return mode === 'furnished' ? floor.panoramaNameFurnished : floor.panoramaNameUnfurnished;    
      }    
    }    
    for (unitId in UNITS_DATA) {    
      if (!Object.prototype.hasOwnProperty.call(UNITS_DATA, unitId)) continue;    
      unit = UNITS_DATA[unitId];    
      opts = getUnitBlueprintOptions(unit);    
      for (j = 0; j < opts.length; j++) {    
        opt = opts[j];    
        if (opt.disabled) continue;    
        if (panoramaNameMatches(name, opt.panoramaName) ||    
            panoramaNameMatches(name, opt.panoramaNameFurnished) ||    
            panoramaNameMatches(name, opt.panoramaNameUnfurnished)) {    
          return getBlueprintPanoramaForMode(opt, mode);    
        }    
      }    
    }    
    var lower = name.toLowerCase();    
    if (mode === 'unfurnished' && lower.indexOf('undressed') === -1 && lower.indexOf('dressed') !== -1) {    
      return name.replace(/dressed/g, 'undressed');    
    }    
    if (mode === 'furnished' && lower.indexOf('undressed') !== -1) {    
      return name.replace(/undressed/g, 'dressed');    
    }    
    return '';    
  }    
    
  function getBlueprintOptionForPanorama(mediaName) {    
    if (!mediaName) return null;    
    var name = String(mediaName);    
    var unitId, unit, opts, j, opt;    
    for (unitId in UNITS_DATA) {    
      if (!Object.prototype.hasOwnProperty.call(UNITS_DATA, unitId)) continue;    
      unit = UNITS_DATA[unitId];    
      opts = getUnitBlueprintOptions(unit);    
      for (j = 0; j < opts.length; j++) {    
        opt = opts[j];    
        if (opt.disabled) continue;    
        if (panoramaNameMatches(name, opt.panoramaName) ||    
            panoramaNameMatches(name, opt.panoramaNameFurnished) ||    
            panoramaNameMatches(name, opt.panoramaNameUnfurnished)) {    
          return { unitId: unitId, option: opt };    
        }    
      }    
    }    
    return null;    
  }    
    
  function syncBlueprintFromPanoramaName(mediaName) {    
    var match = getBlueprintOptionForPanorama(mediaName);    
    if (!match) return false;    
    if (state.activeUnitId !== match.unitId || state.activeBlueprintId !== match.option.id) {    
      state.activeUnitId = match.unitId;    
      state.activeBlueprintId = match.option.id;    
      if (state.nav2Visible) renderBlueprintGridNav2();    
    }    
    checkFurnishedToggleVisibility();    
    return true;    
  }    
    
  function resolveFurnishModeFromPanoramaName(mediaName) {    
    var name = String(mediaName || '').toLowerCase();    
    if (!name) return null;    
    
    var i, floor, unitId, unit, opts, j, opt;    
    for (i = 0; i < FLOORS.length; i++) {    
      floor = FLOORS[i];    
      if (panoramaNameMatches(name, floor.panoramaNameUnfurnished)) return 'unfurnished';    
      if (panoramaNameMatches(name, floor.panoramaNameFurnished)) return 'furnished';    
    }    
    for (unitId in UNITS_DATA) {    
      if (!Object.prototype.hasOwnProperty.call(UNITS_DATA, unitId)) continue;    
      unit = UNITS_DATA[unitId];    
      opts = getUnitBlueprintOptions(unit);    
      for (j = 0; j < opts.length; j++) {    
        opt = opts[j];    
        if (panoramaNameMatches(name, opt.panoramaNameUnfurnished)) return 'unfurnished';    
        if (panoramaNameMatches(name, opt.panoramaNameFurnished)) return 'furnished';    
      }    
    }    
    if (name.indexOf('undressed') !== -1) return 'unfurnished';    
    if (name.indexOf('dressed') !== -1) return 'furnished';    
    return null;    
  }    
    
  function syncFurnishModeFromPanoramaName(mediaName) {    
    var mode = resolveFurnishModeFromPanoramaName(mediaName);    
    if (mode && state.furnishMode !== mode) {    
      state.furnishMode = mode;    
      updateFurnishedToggleUI();    
    }    
  }    
    
  function enterFloorNavigation(floorId) {    
    window.hideImmersiveCalculator && window.hideImmersiveCalculator();    
    if (floorId) setNavigationFloor(floorId, false);    
    syncNavigation1ToCurrentPanorama();    
    window.showNavigation1();    
  }    
    
 function enterUnitNavigation(unitId, blueprintId) {    
    window.hideImmersiveCalculator && window.hideImmersiveCalculator();    
    var isSameUnit = !unitId || unitId === state.activeUnitId;    
    if (unitId) state.activeUnitId = unitId;    
    if (blueprintId) {    
      // Explicit blueprint passed in — always apply    
      state.activeBlueprintId = blueprintId;    
      state.furnishMode = 'furnished';    
    } else if (!isSameUnit) {    
      // Different unit — reset blueprint state    
      state.activeBlueprintId = '';    
      syncFurnishModeFromPanoramaName(getCurrentPanoramaName());    
    }    
    // Same unit re-entry without explicit blueprint → preserve activeBlueprintId + furnishMode    
    syncBlueprintFromPanoramaName(getCurrentPanoramaName());    
    window.showNavigation2();    
  }    
    
  function hideAllNavigation() {    
    window.hideNavigation1();    
    window.hideNavigation2();    
    window.hideImmersiveCalculator && window.hideImmersiveCalculator();    
  }    
    
  window.enterFloorNavigation = enterFloorNavigation;    
  window.enterUnitNavigation = enterUnitNavigation;    
  window.hideAllNavigation = hideAllNavigation;    
  window.ensureImmersiveHudVisible = function () {    
    ensureHudLayerMounted();    
    setTimeout(ensureHudLayerMounted, 100);    
    setTimeout(ensureHudLayerMounted, 400);    
  };    
  window.debugImmersiveView = function () {    
    var view = getViewState();    
    var panorama = getCurrentPanoramaName();    
    var cam = exportCameraState();    
    if (typeof console !== 'undefined' && console.log) console.log('[immersive-nav] panorama:', panorama, 'view:', view, 'exportCameraState:', cam);    
    return { panorama: panorama, view: view, exportCameraState: cam };    
  };    
    
  /* ── PUBLIC API ── */    
  window.showNavigation1 = function () {    
    state.nav2Visible = false; state.nav1Visible = true;    
    var c = sel('immersive-canvas-nav1');    
    if (c) { c.style.setProperty('display', 'flex', 'important'); setTimeout(function () { c.classList.add('hud-ready'); }, 20); }    
    syncNavigation1ToCurrentPanorama(); updateHUDStateNav1(false); checkHUDVisibilityNav1(); checkFurnishedToggleVisibility(); window.hideImmersiveCalculator?.(); ensureHudLayerMounted();    
  };    
    
  window.hideNavigation1 = function () {    
    state.nav1Visible = false;    
    var c = sel('immersive-canvas-nav1');    
    if (c) { c.classList.remove('hud-ready'); c.style.setProperty('display', 'none', 'important'); }    
    checkFurnishedToggleVisibility();    
  };    
    
  window.showNavigation2 = function () {    
    state.nav1Visible = false; state.nav2Visible = true;    
    var c = sel('immersive-canvas-nav2');    
    if (c) { c.style.setProperty('display', 'flex', 'important'); setTimeout(function () { c.classList.add('hud-ready'); }, 20); }    
    checkHUDVisibilityNav2(); renderAllNav2(); syncBlueprintFromPanoramaName(getCurrentPanoramaName()); checkFurnishedToggleVisibility(); ensureHudLayerMounted();    
  };    
  window.hideNavigation2 = function () {    
    state.nav2Visible = false; state.activeBlueprintId = '';    
    var c = sel('immersive-canvas-nav2');    
    if (c) { c.classList.remove('hud-ready'); c.style.setProperty('display', 'none', 'important'); }    
    checkFurnishedToggleVisibility();    
  };    
  
  window.toggleImmersiveCalculator = function () {    
    var root = sel('hud-cost-calculator-root');    
    if (!root) return;    
    state.calc.visible = !state.calc.visible;    
    if (state.calc.visible) { root.style.setProperty('display', 'block', 'important'); setTimeout(function () { root.classList.add('is-visible'); updateCalculator(); }, 20); }    
    else { root.classList.remove('is-visible'); root.style.setProperty('display', 'none', 'important'); }    
    refreshIcons();    
  };    
  
  window.hideImmersiveCalculator = function () {    
    var root = sel('hud-cost-calculator-root');    
    if (!root || !state.calc.visible) return;    
    state.calc.visible = false;    
    root.classList.remove('is-visible');    
    root.style.setProperty('display', 'none', 'important');    
  };    
  
  /* ── BOOT SEQUENCE ── */    
  var loadedScripts = 0;    
  function dependencyReady() {    
    loadedScripts++;    
    if (loadedScripts < 2) return;    
    setupUnifiedEvents();    
    updateCalculator();    
    updateFurnishedToggleUI();    
    ensureHudLayerMounted();    
    initFullscreenHudPersistence();    
    setInterval(checkHUDVisibilityNav1, 150);    
    setInterval(checkHUDVisibilityNav2, 150);    
    setInterval(checkFurnishedToggleVisibility, 150);    
    setInterval(syncNavigation1ToCurrentPanorama, 250);    
  }    
  
  function loadScript(src) {    
    var script = document.createElement('script');    
    script.src = src;    
    script.onload = dependencyReady;    
    document.head.appendChild(script);    
  }    
  
  loadScript('https://cdn.tailwindcss.com');    
  loadScript('https://unpkg.com/lucide@latest');    
  
})();
