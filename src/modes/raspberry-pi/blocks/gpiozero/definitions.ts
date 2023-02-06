const gpiozeroColor: string = "#F89621";

export default function getDefinitions(): void {
	Blockly.Blocks["button_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("button"), "button")
			  .appendField(" = Button(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["button_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("button"), "button")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["wait_for_press","wait_for_press"], ["wait_for_release","wait_for_release"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};

	Blockly.Blocks["line_sensor_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("sensor"), "sensor")
			  .appendField(" = LineSensor(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["line_sensor_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("sensor"), "sensor")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["wait_for_line","wait_for_line"], ["wait_for_no_line","wait_for_no_line"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	  

	Blockly.Blocks["motion_sensor_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("sensor"), "sensor")
			  .appendField(" = MotionSensor(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["motion_sensor_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("sensor"), "sensor")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["wait_for_motion","wait_for_motion"], ["wait_for_no_motion","wait_for_no_motion"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	  

	Blockly.Blocks["light_sensor_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("sensor"), "sensor")
			  .appendField(" = LightSensor(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["light_sensor_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("sensor"), "sensor")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["wait_for_dark","wait_for_dark"], ["wait_for_light","wait_for_light"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	  

	Blockly.Blocks["distance_sensor_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("sensor"), "sensor")
			  .appendField(" = DistanceSensor(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["distance_sensor_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("sensor"), "sensor")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["wait_for_in_range","wait_for_in_range"], ["wait_for_out_of_range","wait_for_out_of_range"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	  

	Blockly.Blocks["led_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("led"), "led")
			  .appendField(" = LED(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["led_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("led"), "led")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"], ["blink","blink"], ["toggle","toggle"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	  

	Blockly.Blocks["pwm_led_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("led"), "led")
			  .appendField(" = PWMLED(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["pwm_led_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("led"), "led")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"], ["blink","blink"], ["toggle","toggle"], ["pulse","pulse"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	  

	Blockly.Blocks["rgb_led_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("led"), "led")
			  .appendField(" = RGBLED(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["rgb_led_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("led"), "led")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"], ["blink","blink"], ["toggle","toggle"], ["pulse","pulse"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	 
	
	Blockly.Blocks["rgb_led_color"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("led"), "led")
			  .appendField(".color = (");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	

	Blockly.Blocks["buzzer_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("buzzer"), "buzzer")
			  .appendField(" = Buzzer(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["buzzer_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("buzzer"), "buzzer")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"], ["beep","beep"], ["toggle","toggle"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	  

	Blockly.Blocks["motor_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("motor"), "motor")
			  .appendField(" = Motor(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["motor_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("motor"), "motor")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"], ["stop","stop"], ["reverse","reverse"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	  

	Blockly.Blocks["servo_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("servo"), "servo")
			  .appendField(" = Servo(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["servo_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("servo"), "servo")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["detach","detach"], ["max","max"], ["mid","mid"], ["min","min"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	 
	
	Blockly.Blocks["servo_value"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("servo"), "servo")
			  .appendField(".value = ");
		  this.appendValueInput("value")
			  .setCheck(null);
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["servo_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("servo"), "servo")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["detach","detach"], ["max","max"], ["mid","mid"], ["min","min"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	 
	
	Blockly.Blocks["servo_value"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("servo"), "servo")
			  .appendField(".value = ");
		  this.appendValueInput("value")
			  .setCheck(null);
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	

	Blockly.Blocks["led_board_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("leds"), "leds")
			  .appendField(" = LEDBoard(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["led_board_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("leds"), "leds")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"], ["blink","blink"], ["toggle","toggle"], ["pulse","pulse"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	  

	Blockly.Blocks["traffic_lights_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("traffic"), "traffic")
			  .appendField(" = TrafficLights(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["traffic_lights_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("traffic"), "traffic")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["red","red"], ["amber","amber"], ["green","green"]]), "color")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"], ["blink","blink"], ["toggle","toggle"], ["pulse","pulse"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	 
	
	Blockly.Blocks["energenie_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("device"), "device")
			  .appendField(" = Energenie(");
		  this.appendValueInput("parameters")
			  .setCheck(null);
		  this.appendDummyInput()
			  .appendField(")");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["energenie_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("device"), "device")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	 

	Blockly.Blocks["camjam_setup"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("robot"), "robot")
			  .appendField(" = CamJamKitRobot()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	
	
	Blockly.Blocks["camjam_action"] = {
		init: function(): void {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldVariable("robot"), "robot")
			  .appendField(".")
			  .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"], ["stop","stop"], ["reverse","reverse"]]), "action")
			  .appendField("()");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(gpiozeroColor);
		}
	};	  
}