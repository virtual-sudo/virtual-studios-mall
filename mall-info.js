(function injectParklinksNavMatrix() {    
  const BOTTOM_NAV_ID = 'parklinks-premium-bottom-reel';    
  const SECOND_BOTTOM_NAV_ID = 'parklinks-premium-bottom-reel-secondary';    
  const SIDE_NAV_ID = 'parklinks-premium-side-matrix';    
  const STYLE_ID = 'parklinks-premium-theme-engine';    
  const EXTERNAL_MALLS_URL = "https://ayala-malls.netlify.app/";    
    
  // State Tracking Matrices  
  let isSideNavMinimized = false;    
  let menusRendered = false;   
  window.currentlyInFloorNav = false;    // Core restriction flag accessed by panorama code  
  // NOTE: isBottomNavManuallyHidden now lives on window (not as a local `let`).  
  // The per-panorama callout scripts run as separate, independent script tags,  
  // so they can only ever read/write state that hangs off `window`. Keeping this  
  // as a local closure variable meant the callouts were silently writing to a  
  // *different* variable than the one this script's own toggle/interval logic  
  // checked, which is why hiding state kept getting overwritten/ignored.  
  window.isBottomNavManuallyHidden = window.isBottomNavManuallyHidden || false;    
  
  // Single Source of Truth: call this from each panorama's "on enter" callout    
  // instead of duplicating the hide/show logic per panorama.    
  // Pass `true` when entering a floor-nav panorama, `false` for a normal one.    
  window.parklinksApplyNavState = function(inFloorNav) {    
    window.currentlyInFloorNav = !!inFloorNav;    
    const sideEl = document.getElementById(SIDE_NAV_ID);    
    const bottomEl = document.getElementById(BOTTOM_NAV_ID);    
    const secondBottomEl = document.getElementById(SECOND_BOTTOM_NAV_ID);    
    if (sideEl) { window.isBottomNavManuallyHidden = sideEl.classList.contains('is-minimized'); }    
    const hideBottom = window.currentlyInFloorNav || !!window.isBottomNavManuallyHidden;    
    const hideSecond = !window.currentlyInFloorNav || !!window.isBottomNavManuallyHidden;    
    // Toggle hud-hidden AND its opposite hud-visible together so the two    
    // classes are never both present — that ambiguous state is what let a    
    // fully invisible (opacity: 0) bar keep eating clicks meant for the other bar.    
    if (bottomEl) { bottomEl.classList.toggle('hud-hidden', hideBottom); bottomEl.classList.toggle('hud-visible', !hideBottom); }    
    if (secondBottomEl) { secondBottomEl.classList.toggle('hud-hidden', hideSecond); secondBottomEl.classList.toggle('hud-visible', !hideSecond); }    
  };  
    
  // 1. Structural Data Configuration    
  const PANORAMA_REEL = [    
    { index: 0, label: "Overview", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/parklinks-overview.png?raw=true" },    
    { index: 1, label: "Parklinks Bridge", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/parklinks-bridge.png?raw=true" },    
    { index: 2, label: "Central Park", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/central-park.png?raw=true" },    
    { index: 3, label: "Central Park Overview", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/central-park-overview.png?raw=true" },    
    { index: 4, label: "Drop-off", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/mall-drop-off.png?raw=true" }    
  ];    
    
  // 1b. Structural Data Configuration for the Floor/Secondary Nav Reel  
  // NOTE: Replace these placeholder labels/images with your actual scene names.  
  const FLOOR_NAV_REEL = [    
    { index: 5, label: "Entrance", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/mall-entrance.png?raw=true" },    
    { index: 7, label: "Mall Atrium", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/mall-atrium.png?raw=true" },    
    { index: 9, label: "Second Floor", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/second-floor.png?raw=true" },    
    { index: 13, label: "Third Floor", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/third-floor.png?raw=true" }    
  ];    
    
  // 1c. Structural Data Configuration for the Media Gallery Popup  
  // NOTE: Replace these placeholder images/captions with your actual gallery photos.  
  const GALLERY_IMAGES = [    
    { caption: "Parklinks Bridge", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/parklinks-bridge.png?raw=true" },    
    { caption: "Central Park", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/central-park.png?raw=true" },    
    { caption: "Mall Facade", img: "https://raw.githubusercontent.com/virtual-sudo/virtual-studios-mall/refs/heads/main/9e34753df71c055bc605c9330353ea8fa2eb62fa-7680x4320.avif" },    
    { caption: "Drop-off", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/mall-drop-off.png?raw=true" },    
    { caption: "Mall Interior", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/second-floor.png?raw=true" },    
    { caption: "Central Park Overview", img: "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/central-park-overview.png?raw=true" },    
    { caption: "Upper Level", img: "https://raw.githubusercontent.com/virtual-sudo/virtual-studios-mall/refs/heads/main/9e34753df71c055bc605c9330353ea8fa2eb62fa-7680x4320.avif" },    
    { caption: "Rooftop", img: "https://raw.githubusercontent.com/virtual-sudo/virtual-studios-mall/refs/heads/main/9e34753df71c055bc605c9330353ea8fa2eb62fa-7680x4320.avif" }    
  ];    
    
  // 2. Lifecycle Cleanup    
  if (document.getElementById(BOTTOM_NAV_ID)) document.getElementById(BOTTOM_NAV_ID).remove();    
  if (document.getElementById(SECOND_BOTTOM_NAV_ID)) document.getElementById(SECOND_BOTTOM_NAV_ID).remove();    
  if (document.getElementById(SIDE_NAV_ID)) document.getElementById(SIDE_NAV_ID).remove();    
  if (document.getElementById(STYLE_ID)) document.getElementById(STYLE_ID).remove();    
    
  // 3. Inject Typography & Custom Premium Styles    
  if (!document.getElementById("parklinks-popup-fonts")) {    
    const fontLink = document.createElement("link");    
    fontLink.id = "parklinks-popup-fonts";    
    fontLink.rel = "stylesheet";    
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Marcellus&display=swap";     
    document.head.appendChild(fontLink);    
  }    
    
  const styles = document.createElement('style');    
  styles.id = STYLE_ID;    
  styles.innerHTML = `    
    /* --- Visibility State Animation Rules --- */    
    .hud-transition-element {    
      transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), background 0.4s ease, border-radius 0.4s ease !important;    
      opacity: 0;  
      transform: scale(0.95);  
    }    
    .hud-visible {  
      opacity: 1 !important;  
      transform: scale(1) !important;  
    }  
    .hud-hidden {    
      display: none !important;    
      visibility: hidden !important;    
      opacity: 0 !important;    
      pointer-events: none !important;    
    }    
    
    /* --- Floating & Highly Rounded Bottom Highlight Reel --- */    
    #${BOTTOM_NAV_ID}, #${SECOND_BOTTOM_NAV_ID} {    
      position: fixed !important;    
      bottom: 24px !important;    
      left: 50% !important;    
      transform: translateX(-50%) scale(0.95) !important;    
      width: auto !important;    
      max-width: 90vw !important;    
      background: rgba(10, 10, 10, 0.88) !important;    
      backdrop-filter: blur(20px) saturate(140%) !important;    
      -webkit-backdrop-filter: blur(20px) saturate(140%) !important;    
      border: 1px solid rgba(255, 255, 255, 0.12) !important;    
      border-radius: 50px !important;    
      z-index: 2147483645 !important;    
      padding: 12px 28px !important;    
      display: flex !important;    
      justify-content: center !important;    
      align-items: center !important;    
      box-sizing: border-box !important;    
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1) !important;    
    }    
    #${BOTTOM_NAV_ID}.hud-visible, #${SECOND_BOTTOM_NAV_ID}.hud-visible {  
      transform: translateX(-50%) scale(1) !important;  
    }  
    /* Vertical padding on the scroll wrapper itself (not just the outer     
       pill's padding above) is required here: overflow-x: auto below forces    
       overflow-y to compute as auto too (a browser rule for boxes where only    
       one axis is set to something other than visible), which turns this    
       wrapper into its own clipping box. The hover lift (translateY(-4px))    
       and the active-card glow (box-shadow 0 0 15px) on the thumb cards were    
       getting sheared off at the top edge because this wrapper previously had    
       0 top/bottom padding, so it had a real region for cards to occupy but    
       zero headroom for anything to spill into. 10px top/bottom is comfortably    
       more than the 4px lift, so the hover state now clears the clip line.  
    */    
    #${BOTTOM_NAV_ID} .reel-scroll-wrapper, #${SECOND_BOTTOM_NAV_ID} .reel-scroll-wrapper {    
      display: flex !important;    
      gap: 12px !important;    
      padding: 10px 2px !important;    
      overflow-x: auto !important;    
      pointer-events: auto !important;    
      scrollbar-width: none !important;    
      -webkit-overflow-scrolling: touch !important;  
    }    
    #${BOTTOM_NAV_ID} .reel-scroll-wrapper::-webkit-scrollbar, #${SECOND_BOTTOM_NAV_ID} .reel-scroll-wrapper::-webkit-scrollbar {    
      display: none !important;    
    }    
    
    /* --- Enhanced Cinema Thumbnail Cards --- */    
    #${BOTTOM_NAV_ID} .thumb-card, #${SECOND_BOTTOM_NAV_ID} .thumb-card {    
      position: relative !important;    
      width: 120px !important;    
      height: 75px !important;    
      border: 1px solid rgba(255, 255, 255, 0.15) !important;    
      background: #111 !important;    
      cursor: pointer !important;    
      overflow: hidden !important;    
      border-radius: 32px !important; /* Increased rounding for flawless alignment with the frame layout */    
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;    
      flex-shrink: 0 !important;    
    }    
    #${BOTTOM_NAV_ID} .thumb-card img, #${SECOND_BOTTOM_NAV_ID} .thumb-card img {    
      width: 100% !important;    
      height: 100% !important;    
      object-fit: cover !important;    
      opacity: 0.6 !important;    
      transition: opacity 0.4s ease, transform 0.6s ease !important;    
    }    
    #${BOTTOM_NAV_ID} .thumb-card .thumb-overlay, #${SECOND_BOTTOM_NAV_ID} .thumb-card .thumb-overlay {    
      position: absolute !important;    
      inset: 0 !important;    
      background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 70%) !important;    
      display: flex !important;    
      align-items: flex-end !important;    
      justify-content: center !important;    
      padding: 6px 14px !important;    
      box-sizing: border-box !important;    
    }    
    #${BOTTOM_NAV_ID} .thumb-card .thumb-label, #${SECOND_BOTTOM_NAV_ID} .thumb-card .thumb-label {    
      font-family: 'Inter', sans-serif !important;    
      font-size: 9px !important;    
      font-weight: 500 !important;    
      color: rgba(255, 255, 255, 0.85) !important;    
      letter-spacing: 0.5px !important;    
      text-transform: uppercase !important;    
      text-align: center !important;    
      width: 100% !important;    
      line-height: 1.2 !important;    
      word-break: break-word !important;    
    }    
    
    #${BOTTOM_NAV_ID} .thumb-card:hover, #${SECOND_BOTTOM_NAV_ID} .thumb-card:hover {    
      transform: translateY(-4px) !important;    
      border-color: rgba(255, 255, 255, 0.6) !important;    
    }    
    #${BOTTOM_NAV_ID} .thumb-card:hover img, #${SECOND_BOTTOM_NAV_ID} .thumb-card:hover img { opacity: 0.9 !important; transform: scale(1.05) !important; }    
    #${BOTTOM_NAV_ID} .thumb-card.active, #${SECOND_BOTTOM_NAV_ID} .thumb-card.active { border: 2px solid #ffffff !important; box-shadow: 0 0 15px rgba(255,255,255,0.3) !important; }    
    #${BOTTOM_NAV_ID} .thumb-card.active img, #${SECOND_BOTTOM_NAV_ID} .thumb-card.active img { opacity: 1 !important; }    
    
    /* --- Rounded Side Matrix Navigation System --- */    
    #${SIDE_NAV_ID} {    
      position: fixed !important;    
      right: 24px !important;    
      top: 50% !important;    
      transform: translateY(-50%) scale(0.95) !important;    
      z-index: 2147483644 !important;    
      display: flex !important;    
      flex-direction: column !important;    
      gap: 12px !important;    
      pointer-events: auto !important;    
      box-sizing: border-box !important;    
      transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1) !important;    
    }    
    #${SIDE_NAV_ID}.hud-visible { transform: translateY(-50%) scale(1) !important; }    
    #${SIDE_NAV_ID} .matrix-toggle-handle { align-self: flex-end !important; background: rgba(10, 10, 10, 0.85) !important; backdrop-filter: blur(12px) !important; -webkit-backdrop-filter: blur(12px) !important; border: 1px solid rgba(255, 255, 255, 0.15) !important; width: 38px !important; height: 38px !important; border-radius: 50% !important; color: #ffffff !important; display: flex !important; justify-content: center !important; align-items: center !important; cursor: pointer !important; box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important; transition: all 0.3s ease !important; }    
    #${SIDE_NAV_ID} .matrix-toggle-handle:hover { background: #ffffff !important; color: #000000 !important; }    
    #${SIDE_NAV_ID} .matrix-toggle-handle svg { width: 14px !important; height: 14px !important; fill: currentColor !important; transition: transform 0.4s ease !important; }    
    
    #${SIDE_NAV_ID} .matrix-buttons-wrapper { display: flex !important; flex-direction: column !important; gap: 10px !important; transition: max-height 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease, transform 0.5s cubic-bezier(0.25, 1, 0.5, 1) !important; max-height: 400px !important; opacity: 1 !important; transform: scale(1) !important; transform-origin: right top !important; }    
    #${SIDE_NAV_ID} .matrix-btn { background: rgba(10, 10, 10, 0.85) !important; backdrop-filter: blur(12px) !important; -webkit-backdrop-filter: blur(12px) !important; border: 1px solid rgba(255, 255, 255, 0.12) !important; padding: 12px 20px !important; color: rgba(255, 255, 255, 0.8) !important; font-family: 'Inter', sans-serif !important; font-size: 10px !important; font-weight: 400 !important; letter-spacing: 1.5px !important; text-transform: uppercase !important; cursor: pointer !important; border-radius: 30px !important; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important; text-align: center !important; box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important; white-space: nowrap !important; }    
    #${SIDE_NAV_ID} .matrix-btn:hover { background: rgba(255, 255, 255, 0.95) !important; color: #000000 !important; border-color: #ffffff !important; transform: translateX(-3px) !important; }    
    #${SIDE_NAV_ID} .matrix-btn-disabled, #${SIDE_NAV_ID} .matrix-btn-disabled:hover { opacity: 0.4 !important; cursor: not-allowed !important; background: rgba(10, 10, 10, 0.85) !important; color: rgba(255, 255, 255, 0.8) !important; transform: none !important; }    
    
    #${SIDE_NAV_ID}.is-minimized .matrix-buttons-wrapper { max-height: 0 !important; opacity: 0 !important; transform: scale(0.8) translateY(-10px) !important; pointer-events: none !important; }    
    #${SIDE_NAV_ID}.is-minimized .matrix-toggle-handle svg { transform: rotate(180deg) !important; }    
    
    /* --- Premium Popup Legacy Mobile Scroll Engine Fixes --- */    
    .legacy-scrollable-body {    
      flex: 1 1 auto !important;    
      min-height: 0 !important;    
      overflow-y: auto !important;    
      padding-right: 8px !important;    
      margin-bottom: 20px !important;    
      scrollbar-width: thin !important;    
      scrollbar-color: rgba(255,255,255,0.2) transparent !important;    
    }    
    .legacy-scrollable-body::-webkit-scrollbar { width: 4px !important; }    
    .legacy-scrollable-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2) !important; border-radius: 4px !important; }    
    
    /* --- Media Gallery Popup Grid --- */    
    .parklinks-gallery-grid { display: grid !important; grid-template-columns: repeat(4, 1fr) !important; grid-auto-rows: 130px !important; gap: 14px !important; }    
    .parklinks-gallery-item { position: relative !important; border-radius: 16px !important; overflow: hidden !important; border: 1px solid rgba(255,255,255,0.1) !important; cursor: pointer !important; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease !important; }    
    .parklinks-gallery-item.featured { grid-column: span 2 !important; grid-row: span 2 !important; }    
    .parklinks-gallery-item:hover { transform: translateY(-4px) scale(1.015) !important; border-color: rgba(255,255,255,0.5) !important; box-shadow: 0 16px 30px rgba(0,0,0,0.5) !important; z-index: 2 !important; }    
    .parklinks-gallery-item img { width: 100% !important; height: 100% !important; object-fit: cover !important; transition: transform 0.6s ease, opacity 0.4s ease !important; opacity: 0.85 !important; position: absolute !important; inset: 0 !important; }    
    .parklinks-gallery-item:hover img { transform: scale(1.08) !important; opacity: 1 !important; }    
    .parklinks-gallery-item .gallery-caption { position: absolute !important; bottom: 0 !important; left: 0 !important; right: 0 !important; padding: 14px 16px !important; background: linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0)) !important; font-family: 'Inter', sans-serif !important; font-size: 11px !important; letter-spacing: 0.8px !important; text-transform: uppercase !important; color: rgba(255,255,255,0.9) !important; z-index: 1 !important; }    
    .parklinks-gallery-item.featured .gallery-caption { font-size: 15px !important; padding: 20px !important; }    
    .parklinks-gallery-item .gallery-zoom-icon { position: absolute !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) scale(0.7) !important; width: 34px !important; height: 34px !important; border-radius: 50% !important; background: rgba(0,0,0,0.5) !important; border: 1px solid rgba(255,255,255,0.4) !important; display: flex !important; align-items: center !important; justify-content: center !important; opacity: 0 !important; transition: opacity 0.3s ease, transform 0.3s ease !important; z-index: 1 !important; pointer-events: none !important; }    
    .parklinks-gallery-item .gallery-zoom-icon svg { width: 15px !important; height: 15px !important; fill: #ffffff !important; }    
    .parklinks-gallery-item:hover .gallery-zoom-icon { opacity: 1 !important; transform: translate(-50%, -50%) scale(1) !important; }    
    
    /* --- Gallery Lightbox --- */    
    #parklinks-gallery-lightbox { position: fixed !important; inset: 0 !important; background: rgba(0,0,0,0.92) !important; backdrop-filter: blur(6px) !important; display: flex !important; align-items: center !important; justify-content: center !important; z-index: 2147483647 !important; opacity: 0 !important; transition: opacity 0.35s ease !important; }    
    #parklinks-gallery-lightbox img { max-width: 88vw !important; max-height: 78vh !important; border-radius: 10px !important; box-shadow: 0 30px 80px rgba(0,0,0,0.8) !important; transform: scale(0.96) !important; transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important; }    
    #parklinks-gallery-lightbox .lightbox-caption { position: absolute !important; bottom: 40px !important; left: 0 !important; right: 0 !important; text-align: center !important; font-family: 'Inter', sans-serif !important; font-size: 12px !important; letter-spacing: 2px !important; text-transform: uppercase !important; color: rgba(255,255,255,0.85) !important; }    
    #parklinks-gallery-lightbox .lightbox-close, #parklinks-gallery-lightbox .lightbox-nav { position: absolute !important; background: rgba(255,255,255,0.08) !important; border: 1px solid rgba(255,255,255,0.25) !important; border-radius: 50% !important; color: #ffffff !important; display: flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; transition: all 0.25s ease !important; }    
    #parklinks-gallery-lightbox .lightbox-close:hover, #parklinks-gallery-lightbox .lightbox-nav:hover { background: #ffffff !important; color: #000000 !important; }    
    #parklinks-gallery-lightbox .lightbox-close { top: 24px !important; right: 24px !important; width: 40px !important; height: 40px !important; font-size: 15px !important; }    
    #parklinks-gallery-lightbox .lightbox-nav { top: 50% !important; transform: translateY(-50%) !important; width: 46px !important; height: 46px !important; font-size: 18px !important; }    
    #parklinks-gallery-lightbox .lightbox-nav.prev { left: 24px !important; }    
    #parklinks-gallery-lightbox .lightbox-nav.next { right: 24px !important; }    
    
    /* --- Contact Leasing Popup --- */    
    .parklinks-contact-row { display: flex !important; align-items: center !important; justify-content: center !important; gap: 10px !important; font-family: 'Inter', sans-serif !important; font-size: 13px !important; color: rgba(255, 255, 255, 0.85) !important; margin-bottom: 10px !important; }    
    .parklinks-contact-row a { color: #ffffff !important; text-decoration: none !important; border-bottom: 1px solid rgba(255,255,255,0.3) !important; }    
    .parklinks-contact-row a:hover { border-color: #ffffff !important; }    
    
    /* --- Global Viewport Breakpoints --- */    
    /* Laptop-sized screens: noticeably smaller than the default desktop    
       sizing above, but still larger/roomier than the dedicated mobile    
       breakpoint below. min-width keeps this from ever double-applying    
       together with the 768px mobile block. */    
    @media (max-width: 1440px) and (min-width: 769px) {    
      #${BOTTOM_NAV_ID}, #${SECOND_BOTTOM_NAV_ID} { bottom: 18px !important; padding: 10px 22px !important; max-width: 92vw !important; border-radius: 42px !important; }    
      #${BOTTOM_NAV_ID} .reel-scroll-wrapper, #${SECOND_BOTTOM_NAV_ID} .reel-scroll-wrapper { gap: 9px !important; }    
      #${BOTTOM_NAV_ID} .thumb-card, #${SECOND_BOTTOM_NAV_ID} .thumb-card { width: 96px !important; height: 62px !important; border-radius: 24px !important; }    
      #${BOTTOM_NAV_ID} .thumb-card .thumb-label, #${SECOND_BOTTOM_NAV_ID} .thumb-card .thumb-label { font-size: 8px !important; }    
      #${SIDE_NAV_ID} { right: 18px !important; gap: 9px !important; }    
      #${SIDE_NAV_ID} .matrix-toggle-handle { width: 32px !important; height: 32px !important; }    
      #${SIDE_NAV_ID} .matrix-toggle-handle svg { width: 12px !important; height: 12px !important; }    
      #${SIDE_NAV_ID} .matrix-buttons-wrapper { gap: 8px !important; }    
      #${SIDE_NAV_ID} .matrix-btn { padding: 10px 16px !important; font-size: 9px !important; letter-spacing: 1.2px !important; }    
    }    
    @media (max-width: 768px) {    
      #${BOTTOM_NAV_ID}, #${SECOND_BOTTOM_NAV_ID} { bottom: 16px !important; padding: 10px 20px !important; max-width: 94vw !important; border-radius: 40px !important; }    
      #${BOTTOM_NAV_ID} .thumb-card, #${SECOND_BOTTOM_NAV_ID} .thumb-card { width: 100px !important; height: 65px !important; border-radius: 26px !important; }    
      #${BOTTOM_NAV_ID} .thumb-card .thumb-label, #${SECOND_BOTTOM_NAV_ID} .thumb-card .thumb-label { font-size: 8px !important; }    
      #${SIDE_NAV_ID} { right: 16px !important; gap: 8px !important; }    
      #${SIDE_NAV_ID} .matrix-btn { padding: 10px 16px !important; font-size: 9px !important; }    
      .parklinks-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; grid-auto-rows: 100px !important; }    
      .parklinks-gallery-item.featured { grid-column: span 2 !important; grid-row: span 2 !important; }    
    }    
  `;    
  document.head.appendChild(styles);    
    
  // 4. Panorama Jumper Hook Engine    
  window.parklinksJumpToIndex = function(index) {    
    const root = window.tour?.getRoot?.() || window.tour?.root || window.tour;    
    const player = window.player || window.vtour || root?.locManager?.rootPlayer || root?.player || window.tour?.player;    
        
    if (!player) return;    
    
    const fireJumpSequence = () => {    
      const methods = [    
        () => player.setMediaByIndex(index),    
        () => player.SetMediaByIndex(index),    
        () => player.openPanorama(index),    
        () => player.loadScene(index),    
        () => window.tour?.setMediaByIndex?.(index)    
      ];    
      for (let action of methods) {    
        try {    
          action();    
          if (player.drawScene) player.drawScene();    
          return true;    
        } catch (err) {}    
      }    
      return false;    
    };    
    
    if (!fireJumpSequence()) {    
      let attempts = 0;    
      const delayedSequence = setInterval(() => {    
        attempts++;    
        if (fireJumpSequence() || attempts > 15) clearInterval(delayedSequence);    
      }, 200);    
    }    
  };    
    
  // 5. Defer HUD Generation until workflow completes    
  window.renderParklinksHUDMenus = function() {    
    if (menusRendered) return;    
    menusRendered = true;    
    
    const baseContainer = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.getElementById("viewer") || document.getElementById("root") || document.body;    
    
    const bottomContainer = document.createElement('div');    
    bottomContainer.id = BOTTOM_NAV_ID;    
    bottomContainer.className = 'hud-transition-element';    
        
    const scrollWrapper = document.createElement('div');    
    scrollWrapper.className = 'reel-scroll-wrapper';    
        
    PANORAMA_REEL.forEach(item => {    
      const card = document.createElement('div');    
      card.className = `thumb-card tile-idx-${item.index}`;    
      card.setAttribute('onclick', `window.parklinksJumpToIndex(${item.index})`);    
      card.innerHTML = `    
        <img src="${item.img}" alt="${item.label}" loading="lazy">    
        <div class="thumb-overlay">    
          <span class="thumb-label">${item.label}</span>    
        </div>    
      `;    
      scrollWrapper.appendChild(card);    
    });    
    bottomContainer.appendChild(scrollWrapper);    
    baseContainer.appendChild(bottomContainer);    
    
    // 5b. Second (Floor-Nav) Bottom Reel — same visual style, own data set, hidden by default    
    const secondBottomContainer = document.createElement('div');    
    secondBottomContainer.id = SECOND_BOTTOM_NAV_ID;    
    secondBottomContainer.className = 'hud-transition-element hud-hidden';    
        
    const secondScrollWrapper = document.createElement('div');    
    secondScrollWrapper.className = 'reel-scroll-wrapper';    
        
    FLOOR_NAV_REEL.forEach(item => {    
      const card = document.createElement('div');    
      card.className = `thumb-card floor-tile-idx-${item.index}`;    
      card.setAttribute('onclick', `window.parklinksJumpToIndex(${item.index})`);    
      card.innerHTML = `    
        <img src="${item.img}" alt="${item.label}" loading="lazy">    
        <div class="thumb-overlay">    
          <span class="thumb-label">${item.label}</span>    
        </div>    
      `;    
      secondScrollWrapper.appendChild(card);    
    });    
    secondBottomContainer.appendChild(secondScrollWrapper);    
    baseContainer.appendChild(secondBottomContainer);    
        
    const sideContainer = document.createElement('div');    
    sideContainer.id = SIDE_NAV_ID;    
    sideContainer.className = 'hud-transition-element';    
        
    sideContainer.innerHTML = `    
      <div class="matrix-toggle-handle" onclick="window.toggleParklinksSideNav()" title="Toggle Menu (Shortcut: I)">    
        <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>    
      </div>    
      <div class="matrix-buttons-wrapper">    
        <button class="matrix-btn" onclick="window.parklinksJumpToIndex(0)">Overview</button>    
        <button class="matrix-btn" onclick="window.parklinksJumpToIndex(5)">Explore Mall</button>    
        <button class="matrix-btn matrix-btn-disabled" disabled title="Coming soon">Location Map</button>    
        <button class="matrix-btn" onclick="window.openParklinksMediaGalleryPopup()">Media Gallery</button>    
        <button class="matrix-btn" onclick="window.openParklinksAboutPopupLegacy()">About Parklinks</button>    
        <button class="matrix-btn" onclick="window.openExternalMallsMatrix()">Explore Other Ayala Malls</button>    
        <button class="matrix-btn" onclick="window.openParklinksContactLeasingPopup()">Contact Leasing</button>    
      </div>    
    `;    
    baseContainer.appendChild(sideContainer);    
    
    setTimeout(() => {    
      bottomContainer.classList.add('hud-visible');    
      sideContainer.classList.add('hud-visible');    
      // Deliberately NOT adding 'hud-visible' to secondBottomContainer here.    
      // It starts (and must stay) hud-hidden until parklinksApplyNavState(true)    
      // reveals it on an actual floor-nav panorama — otherwise it sits on top    
      // of the first nav bar, invisible but still eating clicks.    
      window.parklinksApplyNavState(window.currentlyInFloorNav);    
    }, 50);    
  };    
    
  // Master State-Controlled Toggle Engine  
  window.toggleParklinksSideNav = function() {    
    const sideEl = document.getElementById(SIDE_NAV_ID);    
    if (!sideEl) return;    
        
    isSideNavMinimized = !isSideNavMinimized;    
    sideEl.classList.toggle('is-minimized', isSideNavMinimized);    
    // Reapply nav visibility from the single source of truth instead of    
    // duplicating the hide/show rules here — this is what previously drifted    
    // out of sync with the panorama callouts and the auto-sync loop.    
    window.parklinksApplyNavState(window.currentlyInFloorNav);    
  };    
    
  // Fallback Native Floor Nav Overrides  
  if (typeof window.enterFloorNavigation === 'function') {    
    const originalFloorNav = window.enterFloorNavigation;    
    window.enterFloorNavigation = function(floorId) {    
      originalFloorNav.apply(this, arguments);    
      window.parklinksApplyNavState(!!floorId);    
    };    
  }  
    
  window.addEventListener('keydown', function(event) {    
    if (event.key === 'i' || event.key === 'I') {    
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;    
      window.toggleParklinksSideNav();    
    }    
  });    
    
  window.openExternalMallsMatrix = function() { window.open(EXTERNAL_MALLS_URL, '_blank'); };    
    
  // About Module Execution Framework With Responsive Viewport Adapters    
  window.openParklinksAboutPopupLegacy = function() {    
    var legacyCheck = document.getElementById("parklinks-custom-popup-legacy");    
    if (legacyCheck) legacyCheck.remove();    
    
    var overlay = document.createElement("div");    
    overlay.id = "parklinks-custom-popup-legacy";    
    overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; justify-content: center; align-items: center; z-index: 2147483647; opacity: 0; transition: opacity 0.4s ease;";    
    
    const activeFs = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;    
        
    var modal = document.createElement("div");    
    modal.style.cssText = "position: relative; width: 90%; max-width: 760px; height: 640px; max-height: 90vh; background: rgba(12, 12, 12, 0.85); backdrop-filter: blur(30px) saturate(160%); -webkit-backdrop-filter: blur(30px) saturate(160%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; overflow: hidden; box-shadow: 0 32px 64px rgba(0, 0, 0, 0.85); transform: scale(0.96) translateY(20px); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); box-sizing: border-box; display: flex; flex-direction: column;";    
    
    var imageContainer = document.createElement("div");    
    imageContainer.style.cssText = "position: relative; width: 100%; height: 240px; background-image: url('https://raw.githubusercontent.com/virtual-sudo/virtual-studios-mall/refs/heads/main/9e34753df71c055bc605c9330353ea8fa2eb62fa-7680x4320.avif'); background-size: cover; background-position: center; flex-shrink: 0;";    
    
    var imageGradient = document.createElement("div");    
    imageGradient.style.cssText = "position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(12, 12, 12, 0.85) 100%);";    
    imageContainer.appendChild(imageGradient);    
    
    var contentBox = document.createElement("div");    
    contentBox.style.cssText = "flex: 1 1 auto; min-height: 0; padding: 30px 40px; text-align: center; box-sizing: border-box; display: flex; flex-direction: column; overflow: hidden;";    
    
    var closeBtn = document.createElement("button");    
    closeBtn.innerHTML = "&#x2715;";     
    closeBtn.style.cssText = "position: absolute; top: 20px; right: 20px; background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 50%; width: 34px; height: 34px; color: rgba(255, 255, 255, 0.7); font-family: 'Inter', sans-serif; font-size: 13px; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: all 0.2s ease; z-index: 12;";    
    closeBtn.onclick = function() { dismiss(); };    
    
    var titleText = document.createElement("h2");    
    titleText.innerText = "PARKLINKS";    
    titleText.style.cssText = "font-family: 'Marcellus', serif; font-weight: 400; letter-spacing: 5px; color: #ffffff; margin: 0 0 6px 0; font-size: 28px;";    
    
    var subtitleText = document.createElement("h3");    
    subtitleText.innerText = "A VISION OF SUSTAINABLE URBAN LIVING";    
    subtitleText.style.cssText = "font-family: 'Inter', sans-serif; font-weight: 400; letter-spacing: 3px; color: rgba(255, 255, 255, 0.45); margin: 0 0 16px 0; font-size: 10px;";    
    
    var dividerLine = document.createElement("div");    
    dividerLine.style.cssText = "width: 40px; height: 1px; background: rgba(255, 255, 255, 0.2); margin: 0 auto 20px auto; flex-shrink: 0;";    
    
    var textScrollArea = document.createElement("div");    
    textScrollArea.className = "legacy-scrollable-body";    
    
    var bodyParagraph = document.createElement("p");    
    bodyParagraph.style.cssText = "font-family: 'Inter', sans-serif; font-weight: 300; color: rgba(255, 255, 255, 0.8); font-size: 13.5px; line-height: 1.75; margin: 0; text-align: justify; text-justify: inter-word;";    
    bodyParagraph.innerHTML = "A premier joint venture between <strong>Ayala Land</strong> and <strong>Eton Properties</strong>—two of the country's leading property giants—Parklinks stands as a landmark master-planned, mixed-use development bridging Quezon City and Pasig. Spanning an expansive 35 hectares, it is thoughtfully envisioned to become the greenest urban estate in Metro Manila and the largest sustainable ecosystem along the prime C-5 corridor.<br><br>Crafted to balance modern corporate dynamism with natural tranquility, the estate dedicates 50% of its land to vibrant open networks, sprawling parks, and a majestic iconic bridge over the Marikina River. Parklinks seamlessly intertwines luxury residential towers, world-class corporate offices, and the highly anticipated Ayala Malls Parklinks, establishing a sophisticated new paradigm for urban living where nature and community thrive as one.";    
    textScrollArea.appendChild(bodyParagraph);    
    
    var logoFooterContainer = document.createElement("div");    
    logoFooterContainer.style.cssText = "display: flex; justify-content: center; align-items: center; gap: 35px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 20px; margin-top: auto; flex-shrink: 0;";    
    
    var ayalaLogoImg = document.createElement("img");    
    ayalaLogoImg.src = "https://raw.githubusercontent.com/virtual-sudo/virtual-studios-mall/bab52d4f238282cc5340a1e43ab968a52824c6b4/ayala-land-logo.svg";    
    ayalaLogoImg.style.cssText = "height: 24px; width: auto; filter: brightness(0) invert(1); opacity: 0.85;";    
    
    var etonLogoImg = document.createElement("img");    
    etonLogoImg.src = "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/eton-logo.webp?raw=true";    
    etonLogoImg.style.cssText = "height: 30px; width: auto; filter: brightness(0) invert(1); opacity: 0.85;";    
    
    logoFooterContainer.appendChild(ayalaLogoImg);    
    logoFooterContainer.appendChild(etonLogoImg);    
    
    contentBox.appendChild(titleText);    
    contentBox.appendChild(subtitleText);    
    contentBox.appendChild(dividerLine);    
    contentBox.appendChild(textScrollArea);    
    contentBox.appendChild(logoFooterContainer);    
        
    modal.appendChild(closeBtn);    
    modal.appendChild(imageContainer);    
    modal.appendChild(contentBox);    
    overlay.appendChild(modal);    
        
    if(activeFs) activeFs.appendChild(overlay);    
    else document.body.appendChild(overlay);    
    
    var dismiss = function() {    
        overlay.style.opacity = "0";    
        modal.style.transform = "scale(0.96) translateY(20px)";    
        setTimeout(function() { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 400);    
    };    
    overlay.addEventListener("click", function(e) { if (e.target === overlay) dismiss(); });    
    
    var layoutNormalize = function() {    
      if (window.innerWidth <= 768) {    
        imageContainer.style.height = "140px";    
        contentBox.style.padding = "20px 24px";    
        titleText.style.fontSize = "22px";    
      } else {    
        imageContainer.style.height = "240px";    
        contentBox.style.padding = "30px 40px";    
        titleText.style.fontSize = "28px";    
      }    
    };    
    window.addEventListener("resize", layoutNormalize);    
    layoutNormalize();    
    
    setTimeout(function() {    
        overlay.style.opacity = "1";    
        modal.style.transform = "scale(1) translateY(0)";    
    }, 50);    
  };    
    
  // 6b. Media Gallery Popup    
  window.openParklinksMediaGalleryPopup = function() {    
    var legacyCheck = document.getElementById("parklinks-gallery-popup");    
    if (legacyCheck) legacyCheck.remove();    
    
    var overlay = document.createElement("div");    
    overlay.id = "parklinks-gallery-popup";    
    overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; justify-content: center; align-items: center; z-index: 2147483646; opacity: 0; transition: opacity 0.4s ease;";    
    
    const activeFs = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;    
        
    var modal = document.createElement("div");    
    modal.style.cssText = "position: relative; width: 94%; max-width: 1140px; height: 640px; max-height: 90vh; background: rgba(12, 12, 12, 0.85); backdrop-filter: blur(30px) saturate(160%); -webkit-backdrop-filter: blur(30px) saturate(160%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 22px; overflow: hidden; box-shadow: 0 32px 64px rgba(0, 0, 0, 0.85); transform: scale(0.96) translateY(20px); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); box-sizing: border-box; display: flex; flex-direction: column;";    
    
    var contentBox = document.createElement("div");    
    contentBox.style.cssText = "flex: 1 1 auto; min-height: 0; padding: 36px 44px; text-align: center; box-sizing: border-box; display: flex; flex-direction: column; overflow: hidden;";    
    
    var closeBtn = document.createElement("button");    
    closeBtn.innerHTML = "&#x2715;";     
    closeBtn.style.cssText = "position: absolute; top: 20px; right: 20px; background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 50%; width: 34px; height: 34px; color: rgba(255, 255, 255, 0.7); font-family: 'Inter', sans-serif; font-size: 13px; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: all 0.2s ease; z-index: 12;";    
    closeBtn.onclick = function() { dismiss(); };    
    
    var titleText = document.createElement("h2");    
    titleText.innerText = "MEDIA GALLERY";    
    titleText.style.cssText = "font-family: 'Marcellus', serif; font-weight: 400; letter-spacing: 5px; color: #ffffff; margin: 0 0 6px 0; font-size: 28px;";    
    
    var subtitleText = document.createElement("h3");    
    subtitleText.innerText = "A CLOSER LOOK AT PARKLINKS";    
    subtitleText.style.cssText = "font-family: 'Inter', sans-serif; font-weight: 400; letter-spacing: 3px; color: rgba(255, 255, 255, 0.45); margin: 0 0 20px 0; font-size: 10px;";    
    
    var dividerLine = document.createElement("div");    
    dividerLine.style.cssText = "width: 40px; height: 1px; background: rgba(255, 255, 255, 0.2); margin: 0 auto 24px auto; flex-shrink: 0;";    
    
    var gridScrollArea = document.createElement("div");    
    gridScrollArea.className = "legacy-scrollable-body";    
    
    var galleryGrid = document.createElement("div");    
    galleryGrid.className = "parklinks-gallery-grid";    
    GALLERY_IMAGES.forEach((item, i) => {    
      const tile = document.createElement("div");    
      tile.className = i === 0 ? "parklinks-gallery-item featured" : "parklinks-gallery-item";    
      tile.innerHTML = `    
        <img src="${item.img}" alt="${item.caption}" loading="lazy">    
        <div class="gallery-zoom-icon"><svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 5L20.49 19l-5-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/></svg></div>    
        <div class="gallery-caption">${item.caption}</div>    
      `;    
      tile.onclick = function() { window.__openParklinksGalleryLightbox(i); };    
      galleryGrid.appendChild(tile);    
    });    
    gridScrollArea.appendChild(galleryGrid);    
    
    contentBox.appendChild(titleText);    
    contentBox.appendChild(subtitleText);    
    contentBox.appendChild(dividerLine);    
    contentBox.appendChild(gridScrollArea);    
        
    modal.appendChild(closeBtn);    
    modal.appendChild(contentBox);    
    overlay.appendChild(modal);    
        
    if(activeFs) activeFs.appendChild(overlay);    
    else document.body.appendChild(overlay);    
    
    var dismiss = function() {    
        overlay.style.opacity = "0";    
        modal.style.transform = "scale(0.96) translateY(20px)";    
        setTimeout(function() { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 400);    
    };    
    overlay.addEventListener("click", function(e) { if (e.target === overlay) dismiss(); });    
    
    setTimeout(function() {    
        overlay.style.opacity = "1";    
        modal.style.transform = "scale(1) translateY(0)";    
    }, 50);    
  };    
    
  // 6b-ii. Gallery Lightbox Engine (click-to-expand with prev/next cycling)    
  window.__openParklinksGalleryLightbox = function(startIndex) {    
    var existing = document.getElementById("parklinks-gallery-lightbox");    
    if (existing) existing.remove();    
    
    var current = startIndex;    
    const activeFs = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;    
    var galleryParent = document.getElementById("parklinks-gallery-popup") || activeFs || document.body;    
    
    var box = document.createElement("div");    
    box.id = "parklinks-gallery-lightbox";    
    
    var img = document.createElement("img");    
    var caption = document.createElement("div");    
    caption.className = "lightbox-caption";    
    
    var closeBtn = document.createElement("div");    
    closeBtn.className = "lightbox-close";    
    closeBtn.innerHTML = "&#x2715;";    
    closeBtn.onclick = function(e) { e.stopPropagation(); dismissLightbox(); };    
    
    var prevBtn = document.createElement("div");    
    prevBtn.className = "lightbox-nav prev";    
    prevBtn.innerHTML = "&#10094;";    
    prevBtn.onclick = function(e) { e.stopPropagation(); navigate(-1); };    
    
    var nextBtn = document.createElement("div");    
    nextBtn.className = "lightbox-nav next";    
    nextBtn.innerHTML = "&#10095;";    
    nextBtn.onclick = function(e) { e.stopPropagation(); navigate(1); };    
    
    var renderCurrent = function() {    
      const item = GALLERY_IMAGES[current];    
      img.src = item.img;    
      img.alt = item.caption;    
      caption.innerText = item.caption;    
    };    
    var navigate = function(dir) {    
      current = (current + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;    
      img.style.transform = "scale(0.96)";    
      img.style.opacity = "0.4";    
      setTimeout(function() {    
        renderCurrent();    
        img.style.transform = "scale(1)";    
        img.style.opacity = "1";    
      }, 150);    
    };    
    var dismissLightbox = function() {    
      box.style.opacity = "0";    
      setTimeout(function() { if (box.parentNode) box.parentNode.removeChild(box); }, 300);    
    };    
    
    renderCurrent();    
    box.appendChild(closeBtn);    
    box.appendChild(prevBtn);    
    box.appendChild(nextBtn);    
    box.appendChild(img);    
    box.appendChild(caption);    
    box.addEventListener("click", function(e) { if (e.target === box) dismissLightbox(); });    
    galleryParent.appendChild(box);    
    
    setTimeout(function() {    
      box.style.opacity = "1";    
      img.style.transform = "scale(1)";    
    }, 30);    
  };    
    
  // 6c. Contact Leasing Popup    
  // NOTE: Replace the placeholder phone/email below with your actual leasing contact details.    
  window.openParklinksContactLeasingPopup = function() {    
    var legacyCheck = document.getElementById("parklinks-contact-popup");    
    if (legacyCheck) legacyCheck.remove();    
    
    var overlay = document.createElement("div");    
    overlay.id = "parklinks-contact-popup";    
    overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; justify-content: center; align-items: center; z-index: 2147483647; opacity: 0; transition: opacity 0.4s ease;";    
    
    const activeFs = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;    
        
    var modal = document.createElement("div");    
    modal.style.cssText = "position: relative; width: 90%; max-width: 500px; background: rgba(12, 12, 12, 0.85); backdrop-filter: blur(30px) saturate(160%); -webkit-backdrop-filter: blur(30px) saturate(160%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; overflow: hidden; box-shadow: 0 32px 64px rgba(0, 0, 0, 0.85); transform: scale(0.96) translateY(20px); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); box-sizing: border-box;";    
    
    var contentBox = document.createElement("div");    
    contentBox.style.cssText = "padding: 40px; text-align: center; box-sizing: border-box;";    
    
    var closeBtn = document.createElement("button");    
    closeBtn.innerHTML = "&#x2715;";     
    closeBtn.style.cssText = "position: absolute; top: 20px; right: 20px; background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 50%; width: 34px; height: 34px; color: rgba(255, 255, 255, 0.7); font-family: 'Inter', sans-serif; font-size: 13px; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: all 0.2s ease; z-index: 12;";    
    closeBtn.onclick = function() { dismiss(); };    
    
    var titleText = document.createElement("h2");    
    titleText.innerText = "CONTACT LEASING";    
    titleText.style.cssText = "font-family: 'Marcellus', serif; font-weight: 400; letter-spacing: 5px; color: #ffffff; margin: 0 0 6px 0; font-size: 24px;";    
    
    var subtitleText = document.createElement("h3");    
    subtitleText.innerText = "SPEAK WITH OUR LEASING TEAM";    
    subtitleText.style.cssText = "font-family: 'Inter', sans-serif; font-weight: 400; letter-spacing: 3px; color: rgba(255, 255, 255, 0.45); margin: 0 0 20px 0; font-size: 10px;";    
    
    var dividerLine = document.createElement("div");    
    dividerLine.style.cssText = "width: 40px; height: 1px; background: rgba(255, 255, 255, 0.2); margin: 0 auto 24px auto;";    
    
    var phoneRow = document.createElement("div");    
    phoneRow.className = "parklinks-contact-row";    
    phoneRow.innerHTML = `<span>&#128222;</span> <a href="tel:+63281234567">+63 2 8123 4567</a>`;    
    
    var emailRow = document.createElement("div");    
    emailRow.className = "parklinks-contact-row";    
    emailRow.innerHTML = `<span>&#9993;</span> <a href="mailto:leasing@ayalamallsparklinks.com">leasing@ayalamallsparklinks.com</a>`;    
    
    contentBox.appendChild(titleText);    
    contentBox.appendChild(subtitleText);    
    contentBox.appendChild(dividerLine);    
    contentBox.appendChild(phoneRow);    
    contentBox.appendChild(emailRow);    
        
    modal.appendChild(closeBtn);    
    modal.appendChild(contentBox);    
    overlay.appendChild(modal);    
        
    if(activeFs) activeFs.appendChild(overlay);    
    else document.body.appendChild(overlay);    
    
    var dismiss = function() {    
        overlay.style.opacity = "0";    
        modal.style.transform = "scale(0.96) translateY(20px)";    
        setTimeout(function() { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 400);    
    };    
    overlay.addEventListener("click", function(e) { if (e.target === overlay) dismiss(); });    
    
    setTimeout(function() {    
        overlay.style.opacity = "1";    
        modal.style.transform = "scale(1) translateY(0)";    
    }, 50);    
  };    
    
  // 7. Inject Video Landing Matrix Core Configuration Logic    
  window.initializePremiumLandingMatrix = function() {    
    var existingPopup = document.getElementById("parklinks-custom-popup");    
    if (existingPopup) existingPopup.parentNode.removeChild(existingPopup);    
    
    var mainContainer = document.createElement("div");    
    mainContainer.id = "parklinks-custom-popup";    
    mainContainer.style.cssText = "position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; min-width: 100vw !important; min-height: 100vh !important; z-index: 2147483647 !important; font-family: 'Inter', sans-serif; box-sizing: border-box; overflow: hidden; background: #000000;";    
    
    var videoLayer = document.createElement("div");    
    videoLayer.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; background: #000000; transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1); opacity: 0; display: none; overflow: hidden;";    
    
    var videoElement = document.createElement("video");    
    videoElement.style.cssText = "position: absolute; top: 50%; left: 50%; width: 100vw; height: 56.25vw; min-height: 100vh; min-width: 177.77vh; transform: translate(-50%, -50%); border: none; object-fit: cover;";    
    videoElement.muted = false;    
    videoElement.playsInline = true;    
    videoElement.setAttribute("playsinline", "true");    
    videoElement.setAttribute("webkit-playsinline", "true");    
    
    var source = document.createElement("source");    
    source.src = "https://github.com/Raybilon/Newvideo/raw/refs/heads/main/Parklinks%20Mall%20Draft%202%20new.mp4";    
    source.type = "video/mp4";    
    videoElement.appendChild(source);    
    videoLayer.appendChild(videoElement);    
    
    var skipBtn = document.createElement("button");    
    skipBtn.innerText = "SKIP INTRO";    
    skipBtn.style.cssText = "position: absolute; bottom: 40px; right: 40px; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 11px; letter-spacing: 3px; color: #FFFFFF; background: rgba(10, 10, 10, 0.4); border: 1px solid rgba(255, 255, 255, 0.2); padding: 14px 30px; border-radius: 50px; cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); z-index: 22; outline: none; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);";    
    videoLayer.appendChild(skipBtn);    
    
    var overlay = document.createElement("div");    
    overlay.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; z-index: 10; opacity: 1; transition: opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1); box-sizing: border-box; overflow: hidden;";    
    
    var bgContainer = document.createElement("div");    
    bgContainer.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('https://raw.githubusercontent.com/virtual-sudo/virtual-studios-mall/refs/heads/main/9e34753df71c055bc605c9330353ea8fa2eb62fa-7680x4320.avif'); background-size: cover; background-position: left center; transform: scale(1); transition: transform 1.4s cubic-bezier(0.25, 1, 0.5, 1); z-index: 1;";    
    
    var bgMask = document.createElement("div");    
    bgMask.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle, rgba(5, 5, 5, 0.78) 0%, rgba(5, 5, 5, 0.96) 100%); z-index: 2;";    
    
    var glassModal = document.createElement("div");    
    glassModal.style.cssText = "position: relative; width: 90%; max-width: 680px; background: rgba(10, 10, 10, 0.65); backdrop-filter: blur(25px) saturate(140%); -webkit-backdrop-filter: blur(25px) saturate(140%); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 24px; box-shadow: 0 50px 100px rgba(0, 0, 0, 0.95); transform: scale(1) translateY(0); transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1); z-index: 3; box-sizing: border-box; overflow: hidden;";    
    
    var contentWrapper = document.createElement("div");    
    contentWrapper.style.cssText = "padding: 50px 40px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; box-sizing: border-box; opacity: 1;";    
    
    var title = document.createElement("h1");    
    title.innerText = "PARKLINKS";    
    title.style.cssText = "font-family: 'Marcellus', serif; font-weight: 400; letter-spacing: 12px; color: #FFFFFF; margin: 0 0 12px 0; font-size: 40px; text-align: center;";    
    
    var subtitle = document.createElement("h2");    
    subtitle.innerText = "A VISION OF SUSTAINABLE URBAN LIVING";    
    subtitle.style.cssText = "font-family: 'Inter', sans-serif; font-weight: 400; letter-spacing: 4px; color: rgba(255, 255, 255, 0.45); margin: 0 0 30px 0; font-size: 10px; line-height: 1.5; text-align: center;";    
    
    var divider = document.createElement("div");    
    divider.style.cssText = "width: 50px; height: 1px; background: rgba(255, 255, 255, 0.2); margin: 0 auto 30px auto;";    
    
    var bodyText = document.createElement("p");    
    bodyText.style.cssText = "font-family: 'Inter', sans-serif; font-weight: 300; color: rgba(255, 255, 255, 0.75); font-size: 14px; line-height: 1.8; margin: 0 0 36px 0; text-align: center; max-width: 480px;";    
    bodyText.innerHTML = "Welcome to Metro Manila's greenest urban estate. Parklinks seamlessly intertwines luxury residential developments, premium retail configurations, and dynamic corporate workspaces across a thoughtful master-planned ecosystem.";    
    
    var watchBtn = document.createElement("button");    
    watchBtn.innerText = "WATCH INTRODUCTION";    
    watchBtn.style.cssText = "font-family: 'Inter', sans-serif; font-weight: 400; font-size: 11px; letter-spacing: 3px; background: #FFFFFF; color: #050505; border: 1px solid #FFFFFF; padding: 16px 40px; border-radius: 50px; cursor: pointer; transition: all 0.3s ease; margin-bottom: 20px; outline: none; box-shadow: 0 15px 30px rgba(255, 255, 255, 0.1); text-align: center;";    
    
    var enterBtn = document.createElement("button");    
    enterBtn.innerText = "SKIP DIRECTLY TO TOUR";    
    enterBtn.style.cssText = "font-family: 'Inter', sans-serif; font-weight: 400; font-size: 10px; letter-spacing: 2px; color: rgba(255,255,255,0.5); background: transparent; border: none; padding: 10px 20px; cursor: pointer; transition: all 0.3s ease; margin-bottom: 24px; outline: none; text-align: center;";    
    
    var logoFooter = document.createElement("div");    
    logoFooter.style.cssText = "display: flex; justify-content: center; align-items: center; gap: 40px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 24px; width: 100%; max-width: 400px; box-sizing: border-box;";    
    
    var ayalaLogo = document.createElement("img");    
    ayalaLogo.src = "https://raw.githubusercontent.com/virtual-sudo/virtual-studios-mall/bab52d4f238282cc5340a1e43ab968a52824c6b4/ayala-land-logo.svg";    
    ayalaLogo.style.cssText = "height: 22px; width: auto; filter: brightness(0) invert(1); opacity: 0.65;";    
    
    var etonLogo = document.createElement("img");    
    etonLogo.src = "https://github.com/virtual-sudo/virtual-studios-mall/blob/main/eton-logo.webp?raw=true";    
    etonLogo.style.cssText = "height: 28px; width: auto; filter: brightness(0) invert(1); opacity: 0.65;";    
    
    logoFooter.appendChild(ayalaLogo);    
    logoFooter.appendChild(etonLogo);    
    contentWrapper.appendChild(title);    
    contentWrapper.appendChild(subtitle);    
    contentWrapper.appendChild(divider);    
    contentWrapper.appendChild(bodyText);    
    contentWrapper.appendChild(watchBtn);    
    contentWrapper.appendChild(enterBtn);    
    contentWrapper.appendChild(logoFooter);    
    glassModal.appendChild(contentWrapper);    
    overlay.appendChild(bgContainer);    
    overlay.appendChild(bgMask);    
    overlay.appendChild(glassModal);    
    mainContainer.appendChild(videoLayer);    
    mainContainer.appendChild(overlay);    
    
    var targetContainer = document.getElementById("viewer") || document.getElementById("root") || document.body;    
    targetContainer.appendChild(mainContainer);    
    
    var responsiveCheck = function() {    
        if (window.innerWidth <= 768) {    
            title.style.fontSize = "28px";    
            subtitle.style.letterSpacing = "2px";    
            bodyText.style.fontSize = "13px";    
            contentWrapper.style.padding = "35px 24px";    
            logoFooter.style.gap = "30px";    
            skipBtn.style.bottom = "20px";    
            skipBtn.style.right = "20px";    
        } else {    
            title.style.fontSize = "40px";    
            subtitle.style.letterSpacing = "4px";    
            bodyText.style.fontSize = "14px";    
            contentWrapper.style.padding = "50px 40px";    
            logoFooter.style.gap = "40px";    
            skipBtn.style.bottom = "40px";    
            skipBtn.style.right = "40px";    
        }    
    };    
    window.addEventListener("resize", responsiveCheck);    
    responsiveCheck();    
    
    var exitEntirePopup = function() {    
        window.removeEventListener("resize", responsiveCheck);    
        contentWrapper.style.opacity = "0";    
        videoLayer.style.opacity = "0";    
        setTimeout(function() {    
            glassModal.style.transform = "scale(0.96) translateY(15px)";    
            mainContainer.style.opacity = "0";    
            mainContainer.style.transition = "opacity 0.8s ease";    
        }, 100);    
        setTimeout(function() {    
            if (mainContainer.parentNode) mainContainer.parentNode.removeChild(mainContainer);    
            window.renderParklinksHUDMenus();    
        }, 900);    
    };    
    
    watchBtn.addEventListener("click", function() {    
        overlay.style.opacity = "0";    
        setTimeout(function() {    
            overlay.style.display = "none";    
            videoLayer.style.display = "block";    
            setTimeout(function() {    
                videoLayer.style.opacity = "1";    
                videoElement.play();    
            }, 50);    
        }, 600);    
    });    
    
    skipBtn.addEventListener("click", exitEntirePopup);    
    videoElement.addEventListener("ended", exitEntirePopup);    
    enterBtn.addEventListener("click", exitEntirePopup);    
  };    
    
  // 8. Fullscreen Layer Matrix Synchronization Watcher    
  const syncFullscreenLayers = () => {    
    const fsElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;    
    const landingNode = document.getElementById("parklinks-custom-popup");    
    const legacyPopupNode = document.getElementById("parklinks-custom-popup-legacy");    
    const bottomContainer = document.getElementById(BOTTOM_NAV_ID);    
    const secondBottomContainer = document.getElementById(SECOND_BOTTOM_NAV_ID);    
    const sideContainer = document.getElementById(SIDE_NAV_ID);    
        
    const appendToTarget = (node) => {    
      if(!node) return;    
      if (fsElement) fsElement.appendChild(node);    
      else {    
        var baseFallback = document.getElementById("viewer") || document.getElementById("root") || document.body;    
        baseFallback.appendChild(node);    
      }    
    };    
    
    appendToTarget(bottomContainer);    
    appendToTarget(secondBottomContainer);    
    appendToTarget(sideContainer);    
    appendToTarget(landingNode);    
    appendToTarget(legacyPopupNode);    
  };    
    
  document.addEventListener('fullscreenchange', syncFullscreenLayers);    
  document.addEventListener('webkitfullscreenchange', syncFullscreenLayers);    
  document.addEventListener('mozfullscreenchange', syncFullscreenLayers);    
  document.addEventListener('MSFullscreenChange', syncFullscreenLayers);    
    
  // 9. Auto-Sync Highlight Reel Active Highlights    
  let trackingIndex = -1;    
  setInterval(() => {    
    try {    
      const root = window.tour?.getRoot?.() || window.tour?.root || window.tour;    
      const player = window.player || window.vtour || root?.locManager?.rootPlayer || root?.player || window.tour?.player;    
      if (!player) return;    
    
      let currentIndex = -1;    
      if (typeof player.getMediaIndex === 'function') currentIndex = player.getMediaIndex();    
      else if (typeof player.getCurrentMediaIndex === 'function') currentIndex = player.getCurrentMediaIndex();    
      else if (player.currentMedia && player.currentMedia.index !== undefined) currentIndex = player.currentMedia.index;    
    
      if (currentIndex !== -1 && currentIndex !== trackingIndex) {    
        trackingIndex = currentIndex;    
        document.querySelectorAll(`#${BOTTOM_NAV_ID} .thumb-card, #${SECOND_BOTTOM_NAV_ID} .thumb-card`).forEach(el => el.classList.remove('active'));    
        const targetCard = document.querySelector(`#${BOTTOM_NAV_ID} .tile-idx-${currentIndex}`);    
        if (targetCard) targetCard.classList.add('active');    
        const targetFloorCard = document.querySelector(`#${SECOND_BOTTOM_NAV_ID} .floor-tile-idx-${currentIndex}`);    
        if (targetFloorCard) targetFloorCard.classList.add('active');    
    
        // Safety net: derive floor-nav state straight from the player's real    
        // current index (matching it against FLOOR_NAV_REEL) rather than    
        // trusting only the per-panorama callouts. This self-corrects the    
        // second nav's visibility even on an index-5/7/9 scene that doesn't    
        // fire its own "correct panorama" callout, so it can never be left    
        // sitting invisible on top of the first nav bar.    
        const isFloorIndex = FLOOR_NAV_REEL.some(item => item.index === currentIndex);    
        window.parklinksApplyNavState(isFloorIndex);    
      }  
    } catch(e) {}    
  }, 300);    
    
  // 10. Execute Core Initialization    
  window.initializePremiumLandingMatrix();    
    
})();
