// BH 12/15/2012 1:56:28 PM  adds corezip.z.js and corebio.z.js
// later additions include coresym.z.js, coresurface.z.js, coremenu.z.js

// NOTE: Any changes here must also be reflected in build_03_tocore.xml

if (!window["java.registered"])
 window["java.registered"] = false;

(function (ClazzLoader) {

	if (window["java.packaged"]) return;
	window["java.packaged"] = true;

	//if (!Jmol._isAsync) {
		for (var i = 0; i < Jmol._coreFiles.length; i++)
		  ClazzLoader.loadZJar(Jmol._coreFiles[i], ClazzLoader.runtimeKeyClass);
	//}
		
  if (Jmol._debugCode)
    return;

	var	base = ClazzLoader.getJ2SLibBase() + "core/";


// note - we don't need to list ALL the classes -- only the ones that are entry points.
// several more classe are in each of these files -- see build_03_tocore.xml

	ClazzLoader.jarClasspath (base + "coretext.js",	[ 
	"JM.Text",
	"J.shape.TextShape",
	"$.Labels",
	"$.Measures",
	"$.Echo",
	"$.Hover",
	"J.render.TextRenderer",
	"$.LabelsRenderer",
	"$.MeasuresRenderer",
	"$.EchoRenderer",
	"$.HoverRenderer"	
	]);

	ClazzLoader.jarClasspath (base + "corescript.js",	[  
    "J.api.JmolScriptManager", 
    "$.JmolScriptEvaluator",
    "$.JmolScriptFunction",
    "JS.ScriptError", 
    "$.ScriptParam", 
    "$.ScriptExpr", 
    "$.ScriptEval", 
    "$.ScriptTokenParser", 
    "$.ScriptCompiler", 
    "$.CommandWatcherThread", 
    "$.ScriptQueueThread", 
    "$.ScriptDelayThread", 
    "$.ScriptManager",
    "$.FileLoadThread",
    "$.JmolCmdExtension", 
    "$.JmolMathExtension",
    "$.JmolSmilesExtension"
	]);
	
	ClazzLoader.jarClasspath (base + "corescriptcmd.js",	[  
	"JS.CmdExt"
	]);
	                                                 	
	ClazzLoader.jarClasspath (base + "corescriptmath.js",	[  
	"JS.MathExt"
	]);
	                                                 	
	ClazzLoader.jarClasspath (base + "corestate.js",	[  
    "J.api.JmolStateCreator", 
    "JU.StateCreator" 
	]);
	
	ClazzLoader.jarClasspath (base + "coreprop.js",	[  
    "J.api.JmolPropertyManager", 
    "JV.PropertyManager" 
	]);  
  
	ClazzLoader.jarClasspath (base + "coreconsole.js",	[
		"J.api.JmolAppConsoleInterface",
		"J.console.GenericTextArea",
		"$.GenericConsole",
		"J.consolejs.AppletConsole"
	]);

	ClazzLoader.jarClasspath (base + "coremenu.js",	[
		"J.awtjs2d.JSJmolPopup",	
        	"$.JSSwingPopupMenuHelper",
		"J.popup.GenericPopup",
		"$.JmolGenericPopup",
		"$.JmolPopup",
		"$.PopupHelper",
		"$.PopupResource",
		"$.MainPopupResourceBundle"
	]);



	ClazzLoader.jarClasspath (base + "corebinary.js",	[
    "java.io.DataInputStream",
    "$.PushbackInputStream",
    "JS.api.GenericBinaryDocument",
    "JU.BC",
    "$.BinaryDocument"
	]);

	ClazzLoader.jarClasspath (base + "corepymol.js",	[
    "J.api.JmolSceneGenerator",
    "J.api.PymolAtomReader", // -- required by J.adapter.readers.pymol.PyMOLReader
    "J.adapter.readers.pymol.PickleReader",
    "$.PyMOL",
    "$.JmolObject",
    "$.PyMOLGroup",
    "$.PyMOLScene",
    "$.PyMOLReader"
	]);

	ClazzLoader.jarClasspath (base + "coremin.js",	[
		"JM.Minimizer",
		"$.MinObject", // -- required by $.MinAngle
		"$.MinAngle",
		"$.MinAtom",
		"$.MinBond",
		"$.MinTorsion",
		"$.Util",
		"JM.FF.AtomType",
		"$.Calculation", // -- required by $.CalculationsMMFF
		"$.Calculations", // -- required by $.CalculationsMMFF
		"$.CalculationsMMFF",
		"$.CalculationsUFF",
		"$.FFParam",
		"$.ForceField", // -- required by $.forcefield.ForceFieldMMFF
		"$.ForceFieldUFF",
		"$.ForceFieldMMFF",
		"J.thread.MinimizationThread"
	]);

	ClazzLoader.jarClasspath (base + "corezip.js",	[
		"javajs.api.GenericZipInputStream",
		"J.io.JmolUtil",
		"JU.ZipTools",
		"$.ZInputStream"
	]);

	ClazzLoader.jarClasspath (base + "corebio.js",	[
		"J.adapter.readers.pdb.PdbReader",
		"J.adapter.smarter.Structure",
		"J.api.JmolBioResolver",
		"JM.BioResolver",
		"$.BioModel"
 ]);


	ClazzLoader.jarClasspath (base + "coresurface.js",	[
		"JS.IsoExt",
		"J.jvxl.api.VertexDataServer",
		"$.MeshDataServer",
		"J.jvxl.calc.MarchingCubes",
		"$.MarchingSquares",
		"J.jvxl.data.JvxlCoder",
		"$.VolumeData",
		"$.JvxlData",
		"$.MeshData",
		"J.jvxl.readers.SurfaceGenerator",
		"$.Parameters",
		"$.SurfaceReader",
		"$.VolumeDataReader",
		"$.AtomDataReader",
		"$.IsoSolventReader",
   		"$.SurfaceFileReader",
    	"$.VolumeFileReader",
    	"$.XmlReader",
	    "$.JvxlXmlReader",
		"J.shapesurface.Isosurface",
		"$.IsosurfaceMesh",
		"J.rendersurface.IsosurfaceRenderer"
	]);

	ClazzLoader.jarClasspath (base + "coresym.js",	[
    "J.adapter.smarter.XtalSymmetry",
		"J.api.SymmetryInterface",
		"JS.Symmetry",
		"$.PointGroup",
		"$.SpaceGroup",
		"$.HallInfo",
		"$.HallRotationTerm",
		"$.HallRotation",
		"$.HallTranslation",
		"$.SymmetryOperation",
		"$.SymmetryInfo",
		"$.UnitCell"
	]);

	ClazzLoader.jarClasspath (base + "coresmiles.js",	[
    "J.api.SmilesMatcherInterface",
    "JS.SmilesExt",
    "$.VTemp",
    "$.SmilesMatcher",
    "$.InvalidSmilesException",
    "$.SmilesSearch",
    "$.SmilesGenerator",
    "$.SmilesAromatic",
    "$.SmilesAtom",
    "$.SmilesBond",
    "$.SmilesMeasure",
    "$.SmilesParser"
	]);

	ClazzLoader.jarClasspath (base + "corejsvmenu.js",	[
          	"JSV.js2d.JsPopup",
          	"JSV.popup.JSVGenericPopup",
          	"JSV.popup.JSVPopupResourceBundle"
          	
  ]);

	ClazzLoader.jarClasspath (base + "corejsvexport.js",	[
          	"JSV.export.Exporter",
        	  "JSV.api.ExportInterface",
        	  "$.JSVExporter"
	]);


	ClazzLoader.jarClasspath (base + "corejsvdialog.js",	[
					"JSV.api.PlatformDialog",
					"JSV.js2d.JsDialogManager",
					"$.DialogTableModel",
					"$.JsDialog",
        	"JSV.dialog.DialogManager",
        	"$.IntegrationDialog",
        	"$.PeakListDialog",
          "$.MeasurementsDialog",
          "$.OverlayLegendDialog",
          "$.ViewsDialog"
	]);

	ClazzLoader.jarClasspath (base + "coreswing.js",	[
	  "JS.SC", 
        "$.AbstractButton",
        "$.BorderLayout",
        "$.Component",
        "$.Container",
        "$.LayoutManager",
        "$.AbstractTableModel",
        "$.ButtonGroup",
        "$.Cell",
        "$.ColumnSelectionModel",
        "$.Document",
        "$.FlowLayout",
        "$.Grid",
        "$.GridBagConstraints",
        "$.GridBagLayout",
        "$.Insets",
        "$.JButton",
        "$.JCheckBox",
        "$.JCheckBoxMenuItem",
        "$.JComboBox",
        "$.JComponent",
        "$.JComponentImp",
        "$.JContentPane",
        "$.JDialog",
        "$.JEditorPane",
        "$.JLabel",
        "$.JMenu",
        "$.JMenuItem",
        "$.JPanel",
        "$.JPopupMenu",
        "$.JRadioButtonMenuItem",
        "$.JScrollPane",
        "$.JSplitPane",
        "$.JTable",
        "$.JTextField",
        "$.JTextPane",
        "$.ListSelectionModel",
        "$.SwingConstants",
        "$.TableCellRenderer",
        "$.TableColumn"

	]);

}) (Clazz._Loader);
window["java.registered"] = true;
