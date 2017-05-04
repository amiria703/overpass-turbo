webpackJsonp([16],{187:function(e,t){e.exports={"nav.run":"Exécuter","nav.run_tt":"Exécuter cette requête avec l'API Overpass","nav.share":"Partager","nav.share_tt":"obtenir un permalien pour cette requête","nav.export":"Exporter","nav.export_tt":"outils d'export divers","nav.save":"Enregistrer","nav.save_tt":"Enregistrer cette requête","nav.load":"Charger","nav.load_tt":"Charger une requête enregistrée ou un exemple","nav.wizard":"Assistant","nav.wizard_tt":"Un générateur de requêtes","nav.settings":"Paramètres","nav.settings_tt":"réglages divers","nav.help":"Aide","nav.help_tt":"aide, à propos et crédits","tabs.map":"Carte","tabs.map_tt":"Vue de la carte","tabs.data":"Données","tabs.data_tt":"Vue des données","map_controlls.zoom_to_data":"Zoomer sur les données","map_controlls.localize_user":"Localisez-moi !","map_controlls.select_bbox":"sélection manuelle des limites bbox","map_controlls.select_bbox_disabled":"Désactivé car la requête courante n'utilise pas de zone de recherche (bbox)","map_controlls.toggle_wide_map":"Réduire/agrandir la carte","map_controlls.toggle_data":"Afficher/masquer les données","map_controlls.suggest_zoom_to_data":"Cliquer ici pour afficher les données","settings.title":"Paramètres","settings.section.general":"Paramètres généraux","settings.ui_lang":"Langue de l'interface","settings.server":"Serveur","settings.force_simple_cors":"Force une requête CORS simple","settings.force_simple_cors_expl":'utilisé quand le serveur ne supporte pas les requêtes <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">CORS</a> prévérifiées',"settings.disable_autorepair":"Désactiver les messages d'avertissement/d'auto-réparation quand l'API Overpass ne renvoie aucune donnée affichable.","settings.section.editor":"Éditeur","settings.enable_rich_editor":"Active l'éditeur de code enrichi","settings.enable_rich_editor_expl":"à désactiver sur les mobiles ; nécessite un rechargement de la page pour être pris en compte","settings.editor_width":"Largeur de l'éditeur","settings.editor_width_expl":"Par exemple « 400px », laisser vide pour la valeur par défaut","settings.section.map":"Carte","settings.tile_server":"Serveur de tuiles","settings.tile_opacity":"Opacité des Tuiles","settings.tile_opacity_expl":"transparence du fonds de carte : 0.0=transparent … 1.0=Opaque","settings.show_crosshairs":"Affiche une repère au centre de la carte","settings.disable_poiomatic":"N'affiche pas les petits objets comme points d'intérêts.","settings.show_data_stats":"Affiche des statistiques à propos des données chargées et affichées.","settings.section.sharing":"Partager","settings.include_map_state":"Inclure l'état actuel de la carte dans les permaliens","settings.compression":"Compression","settings.section.export":"Exporter","settings.export_image_scale":"Affiche l'échelle sur les images exportées.","settings.export_image_attr":"Affiche les crédits sur les images exportées.","save.title":"Enregistrer","save.enter_name":"Saisissez un nom pour cette requête","load.title":"Charger","load.delete_query":"Supprimer cette requête","load.saved_queries":"Requêtes enregistrées","load.examples":"Exemples","load.no_saved_query":"Vous n'avez pas encore enregistré de requête","export.title":"Exporter","export.section.map":"Carte","export.as_png":'en <a id="export-image" href="">image png</a>',"export.as_interactive_map":'en <a id="export-interactive-map" href="">Carte interactive</a>',"export.current_map_view":'Vue actuelle sur <a id="export-map-state" href="">OpenStreetView.org</a>',"export.map_view_expl":"zone de recherche, centre, etc.","export.section.data":"Données","export.as_geoJSON":'en <a id="export-geoJSON" href="">geoJSON</a>',"export.as_GPX":'en <a id="export-GPX" href="">GPX</a>',"export.as_KML":'en <a id="export-KML" href="">KML</a>',"export.raw":'<a id="export-raw" href="">données</a> brutes',"export.raw_interpreter":'données brutes depuis l\'<a id="export-overpass-api" href="" target="_blank" class="external">API Overpass</a>',"export.save_geoJSON_gist":'enregistrer en GeoJSON sur <a id="export-geoJSON-gist" href="" class="external">gist</a>',"export.section.query":"Requête","export.as_text":'en <a id="export-text" href="" download="query.txt" target="_blank">texte</a>',"export.to_xml":'en <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>',"export.to_ql":'en <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a> (<a id="export-convert-compact" href="" target="_blank" class="external">compact</a>)',"export.editors":"charger les données dans un éditeur externe OSM :","export.geoJSON.title":"Export - geoJSON","export.geoJSON.expl":"Les données affichées actuellement en GeoJSON :","export.geoJSON.no_data":"Aucune donnée GeoJSON disponible ! Veuillez d'abord exécuter une requête.","export.geoJSON_gist.title":"Enregistrer sur gist","export.geoJSON_gist.gist":"Gist :","export.geoJSON_gist.geojsonio":"Editer avec :","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"Export - GPX","export.GPX.expl":"Les données affichées actuellement en GPX :","export.GPX.no_data":"Aucune donnée  GPX disponible ! Merci d'exécuter une requête.","export.KML.title":"Export - KML","export.KML.expl":"Les données affichées actuellement en KML :","export.KML.no_data":"Aucune donnée KML disponible ! Merci d'exécuter une requête.","export.raw.title":"Export - données brutes","export.raw.expl":"Données brutes affichées actuellement :","export.raw.no_data":"Aucune donnée brute disponible ! Merci d'exécuter une requête.","export.map_view.title":"Vue actuelle de la carte","export.map_view.permalink":"Permalien","export.map_view.permalink_osm":"sur osm.org","export.map_view.center":"Centre","export.map_view.center_expl":"lat, lon","export.map_view.bounds":"Limites","export.map_view.bounds_selection":"Limites (sélection manuelle des limites bbox)","export.map_view.bounds_expl":"sud, ouest, nord, est","export.map_view.zoom":"Zoom","export.image.title":"Exporter - Image","export.image.alt":"la carte exportée","export.image.download":"Télécharger","export.image.attribution_missing":"Assurez-vous d'inclure la bonne attribution lorsque vous redistribuez cette image !","share.title":"Partage","share.header":"Permalien","share.copy_this_link":'Copier ce <a href="" id="share_link_a">lien</a> pour partager le code actuel :',"share.options":"Options","share.incl_map_state":"Inclure l'état actuel de la carte","share.run_immediately":"Lancer cette requête immédiatement après le chargement","help.title":"Aide","help.section.introduction":"Introduction","help.intro.0":'Ceci est <i>overpass turbo</i>, un outil web de filtrage de données pour <a href="http://www.openstreetmap.org">OpenStreetMap</a>.',"help.intro.1":'Avec overpass turbo vous pouvez exécuter des requêtes de l\'<a href="http://wiki.openstreetmap.org/wiki/Overpass_API">API Overpass</a> et analyser les données OSM interactivement sur une carte',"help.intro.1b":'Il existe un <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">assistant</a> intégré qui permet de créer des requêtes super facilement.',"help.intro.2":'Plus d\'informations au sujet d\'<a href="http://wiki.openstreetmap.org/wiki/FR:Overpass_turbo">overpass turbo</a> et sur la création de <a href="http://wiki.openstreetmap.org/wiki/FR:Overpass_API/Overpass_QL">requêtes Overpass</a> peuvent être trouvées sur le wiki OSM.',"help.section.queries":"Requêtes Overpass","help.queries.expl":'L\'API Overpass permet de faire des requêtes sur les données OSM selon vos propres critères de recherche. Pour cela, il existe un <a href="http://wiki.openstreetmap.org/wiki/FR:Overpass_API/Overpass_QL">langage de requête </a> spécifique.',"help.intro.shortcuts":"En plus des requêtes API Overpass normales, on peut utiliser les raccourcis suivants dans overpass turbo :","help.intro.shortcuts.bbox":"coordonnées bbox de la vue actuelle de la carte","help.intro.shortcuts.center":"coordonnées du centre de la carte","help.intro.shortcuts.date":'interval de temps écoulé au format ISO 8601 date-time-string (ex. "24 hours")',"help.intro.shortcuts.style":'défini une <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">feuille de styles MapCSS</a>',"help.intro.shortcuts.custom":"Des raccourcis arbitraires peuvent être définis en indiquant <i>{{raccourci=valeur}}</i> quelque part dans le script.","help.intro.shortcuts.more":'More overpass-turbo shortcuts, additional information about the above and usage examples can be found in the <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">OSM wiki</a>.',"help.section.ide":"Éditeur","help.ide.share.title":"Partage","help.ide.share.expl":"Vous pouvez envoyer à quelqu'un un permalien de la requête sur laquelle vous travaillez actuellement. Vous le trouverez dans l'outil <i>Partager</i> qui affiche un lien que vous pouvez envoyer à un collègue ou publier en ligne. (Notez que les autres travailleront sur leur propre copie de la requête).","help.ide.save_load.title":"Enregistrer et Charger","help.ide.save_load.expl":"Vous pouvez aussi enregistrer et charger vos requêtes. Pour commencer, il y a quelques exemples de requêtes préchargées. Jetez-y un coup d'œil pour avoir un aperçu de ce qu'overpass peut faire.","help.ide.keyboard.title":"Raccourcis clavier :","help.ide.keyboard.run":"Lancer la requête actuelle.","help.ide.keyboard.wizard":"Démarrer l'assistant de requêtes.","help.ide.keyboard.load_save":"Charger (ouvrir) / Enregistrer une requête.","help.ide.keyboard.help":"Ouvrir l'aide dédiée","help.section.key":"Légende","help.key.example":"Caractéristiques diverses de la carte","help.key.description":"Les chemins sont indiqués sous forme de lignes bleues épaisses, les polygones sous forme de surfaces jaunes avec un fin contour bleu, les POI (nœuds avec tags) comme des cercles jaunes avec un contour bleu fin. Les cercles avec un remplissage rouge correspondent aux polygones ou chemins qui sont trop petits pour être affichés normalement. Les lignes ou contours roses signifient qu'un objet fait partie d'au moins une relation (chargée). Les lignes pointillées signifient qu'un chemin ou un polygone a une géométrie incomplète (probablement parce que certains de ses nœuds n'ont pas été chargés).","help.section.export":"Exporter","help.export":'L\'outil <i>Exporter</i> contient diverses options en relation avec la requête et/ou les données.<br />Les options avec le symbole <span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span> reposent sur ou se réfèrent a un outil externe (en ligne).',"help.export.query_data.title":"Requête / Données","help.export.query_data.expl":"Tout ce que vous pouvez faire avec les données ou les requêtes brutes, comme convertir les requêtes dans les différents langages ou exporter les données en geoJSON. Une option très utile est la possibilité d'envoyer la requête à JOSM.","help.export.map.title":"Carte","help.export.map.expl":"Convertit la vue actuelle de la carte et ses données en une image png statique, ou en une carte interactive (plein écran), etc.","help.section.about":"À propos","help.about.maintained":"<i>overpass turbo</i> est maintenu par Martin Raifer (tyr.asd at gmail.com)","help.about.feedback.title":"Feedback, signaler un bug, demander une amélioration","help.about.feedback":'If you would like to give feedback, report issues or ask for a particular feature, please use the <a href="https://github.com/tyrasd/overpass-turbo/issues">issue tracker</a> on github or the <a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">discussion page</a> on the OSM-wiki.',"help.about.source.title":"Code source","help.about.source":'Le <a href="https://github.com/tyrasd/overpass-turbo">code source</a> de cette application est disponible sous <a href="LICENSE">licence</a> MIT.',"help.section.attribution":"Crédits","help.attr.data_sources":"Sources des données","help.attr.data":'Données &copy; contributeurs <a href="http://openstreetmap.org/">OpenStreetMap</a>, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">Termes</a>)</span>',"help.attr.mining":"Extraction de données par ","help.attr.tiles":'Tuiles &copy; contributeurs <a href="http://openstreetmap.org/">OpenStreetMap</a>, <a href="http://creativecommons.org/licenses/by-sa/2.0/" style="font-size:smaller;">CC-BY-SA</a>',"help.attr.search":"Recherche fournie par","help.attr.software":"Logiciel et bibliothèques","help.attr.leaflet":"Carte propulsée par","help.attr.codemirror":"Éditeur propulsé par","help.attr.other_libs":"Autres bibliothèques :","ffs.title":"Assistant","ffs.placeholder":"rechercher","ffs.expl":'L\'<a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">assistant</a> vous aide à créer des requêtes Overpass. Voici quelques exemples d\'utilisation :',"ffs.parse_error":"Désolé, cette recherche ne peut pas être comprise.","ffs.parse_error_expl":'Notez que vous devez utiliser des guillemets pour les chaines contenant des espaces ou des caractères spéciaux. Si vous utilisez plusieurs filtres de recherche, vous devez les séparer par l\'opérateur booléen adéquat (<i>and</i> ou <i>or</i>). Lisez la <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">documentation</a> pour plus d\'informations.',"ffs.typo":"Est-ce que vous vouliez dire :","dialog.dismiss":"Annuler","dialog.cancel":"annuler","dialog.save":"Enregistrer","dialog.delete":"supprimer\n","dialog.close":"fermer","dialog.done":"Ok","dialog.abort":"annuler","dialog.repair_query":"réparer la requête","dialog.continue_anyway":"poursuivre quand même","dialog.show_data":"montrer les données","dialog.wizard_build":"construire la requête","dialog.wizard_run":"Construire et exécuter une requête","dialog.delete_query.title":"Supprimer la requête ?","dialog.delete_query.expl":"Êtes-vous sûr de vouloir supprimer cette requête ?","error.query.title":"Erreur de requête","error.query.expl":"Une erreur est survenue lors de l'exécution de la requête overpass ! Voici ce que l'API overpass a retourné :","error.ajax.title":"Erreur AJAX","error.ajax.expl":"Une erreur est survenue lors de l’exécution de la requête overpass !","error.mapcss.title":"Erreur MapCSS","error.mapcss.expl":"Feuille de style MapCSS invalide :","error.remote.title":"Erreur du contrôle à distance (remote control)","error.remote.incompat":"Erreur : version du contrôle à distance (remote control) de JOSM incompatible","error.remote.not_found":"L'activation à distance (remote control) n'a pas été trouvée. :( Vérifiez que JOSM est démarré et correctement configuré.","error.nominatim.title":"Erreur Nominatim","error.nominatim.expl":"Ne trouve pas de lieu avec le nom suivant :","warning.browser.title":"Votre navigateur n'est pas supporté :(","warning.browser.expl.1":'Le navigateur que vous utilisez n\'est (probablement) pas capable d\'exécuter tout ou partie de cette application. <small>Il doit supporter <a href="http://fr.wikipedia.org/wiki/Stockage_web_local">l\'API de stockage web local</a> et le <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small>',"warning.browser.expl.2":'Veuillez noter que vous aurez peut-être à autoriser les cookies et/ou les "données locales" pour ce site sur certains navigateurs (comme Firefox et Chrome).',"warning.browser.expl.3":'Veuillez mettre à jour votre navigateur ou passez à un plus performant ! Les versions récentes de <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> et <a href="http://www.mozilla.org/de/firefox/">Firefox</a> ont été testées et fonctionnent.\n\nAutrement vous pouvez toujours utiliser le <a href="http://overpass-api.de/query_form.html">formulaire de requêtes de l\'API Overpass</a>.',"warning.incomplete.title":"Données Incomplètes","warning.incomplete.expl.1":"Cette requête n'a retourné aucun nœud. Dans OSM, seuls les nœuds contiennent des coordonnées. Par exemple, un chemin ne peut pas être affiché sans ses nœuds.","warning.incomplete.expl.2":'Si ce n\'est pas le résultat auquel vous vous attendiez, <i>overpass turbo</i> peut vous aider à réparer (auto-complétion) la requête en sélectionnant "réparer la requête" ci-dessous. Sinon, vous pouvez continuer vers les données.',"warning.incomplete.not_again":"Ne plus afficher ce message.","warning.incomplete.remote.expl.1":"Il semble que la requête ne retournera pas les données OSM au format XML avec métadonnées. Les éditeurs comme JOSM nécessitent des données dans ce format.","warning.incomplete.remote.expl.2":'<i>overpass turbo</> peut vous aider à corriger la requête et choisissant "réparer la requête" ci-dessous.',"warning.share.long":"Attention : ce permalien est plutôt long. Il peut ne pas fonctionner dans certains cas.","warning.share.very_long":"Attention : ce permalien est très long. Il a des chances de ne pas fonctionner (dans le serveur web ou le navigateur). Utilisez-le avec prudence !","warning.huge_data.title":"grande quantité de données","warning.huge_data.expl.1":"Cette requête a retourné beaucoup de données (environ {{amount_txt}}).","warning.huge_data.expl.2":"Votre navigateur peut avoir des difficultés à rendre ce contenu. Voulez-vous vraiment continuer ?","waiter.processing_query":"chargement de la requête...","waiter.export_as_image":"exporter comme une image...","data_stats.loaded":"Chargé","data_stats.displayed":"Affiché","data_stats.nodes":"nœuds","data_stats.ways":"chemins","data_stats.relations":"relations","data_stats.areas":"surfaces","data_stats.pois":"points d'intérêt - POIs","data_stats.lines":"lignes","data_stats.polygons":"polygones","data_stats.lag":"Fraîcheur des données","data_stats.lag_areas":"Fraîcheur des zones","data_stats.lag.expl":"de retard par rapport à la base OSM principale","map.intentionally_blank":"La carte est volontairement laissée vide."}}});