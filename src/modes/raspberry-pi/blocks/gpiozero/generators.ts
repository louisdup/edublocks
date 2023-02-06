export default function getGenerators(): void {
	Blockly.Python["button_setup"] = function(block: Blockly.BlockSvg): string {
		const button: string = Blockly.Python.nameDB_.getName(block.getFieldValue("button"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${button} = Button(${parameters})\n`;
		return code;
	};

	Blockly.Python["button_action"] = function(block: Blockly.BlockSvg): string {
		const button: string = Blockly.Python.nameDB_.getName(block.getFieldValue("button"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${button}.${action}()\n`;
		return code;
	};

	Blockly.Python["line_sensor_setup"] = function(block: Blockly.BlockSvg): string {
		const sensor: string = Blockly.Python.nameDB_.getName(block.getFieldValue("sensor"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${sensor} = LineSensor(${parameters})\n`;
		return code;
	};

	Blockly.Python["line_sensor_action"] = function(block: Blockly.BlockSvg): string {
		const sensor: string = Blockly.Python.nameDB_.getName(block.getFieldValue("sensor"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${sensor}.${action}()\n`;
		return code;
	};

	Blockly.Python["motion_sensor_setup"] = function(block: Blockly.BlockSvg): string {
		const sensor: string = Blockly.Python.nameDB_.getName(block.getFieldValue("sensor"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${sensor} = MotionSensor(${parameters})\n`;
		return code;
	};

	Blockly.Python["motion_sensor_action"] = function(block: Blockly.BlockSvg): string {
		const sensor: string = Blockly.Python.nameDB_.getName(block.getFieldValue("sensor"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${sensor}.${action}()\n`;
		return code;
	};

	Blockly.Python["light_sensor_setup"] = function(block: Blockly.BlockSvg): string {
		const sensor: string = Blockly.Python.nameDB_.getName(block.getFieldValue("sensor"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${sensor} = LightSensor(${parameters})\n`;
		return code;
	};

	Blockly.Python["light_sensor_action"] = function(block: Blockly.BlockSvg): string {
		const sensor: string = Blockly.Python.nameDB_.getName(block.getFieldValue("sensor"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${sensor}.${action}()\n`;
		return code;
	};

	Blockly.Python["distance_sensor_setup"] = function(block: Blockly.BlockSvg): string {
		const sensor: string = Blockly.Python.nameDB_.getName(block.getFieldValue("sensor"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${sensor} = DistanceSensor(${parameters})\n`;
		return code;
	};

	Blockly.Python["distance_sensor_action"] = function(block: Blockly.BlockSvg): string {
		const sensor: string = Blockly.Python.nameDB_.getName(block.getFieldValue("sensor"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${sensor}.${action}()\n`;
		return code;
	};

	Blockly.Python["led_setup"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${led} = LED(${parameters})\n`;
		return code;
	};

	Blockly.Python["led_action"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${led}.${action}()\n`;
		return code;
	};

	Blockly.Python["pwm_led_setup"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${led} = PWMLED(${parameters})\n`;
		return code;
	};

	Blockly.Python["pwm_led_action"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${led}.${action}()\n`;
		return code;
	};

	Blockly.Python["rgb_led_setup"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${led} = RGBLED(${parameters})\n`;
		return code;
	};

	Blockly.Python["rgb_led_action"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${led}.${action}()\n`;
		return code;
	};

	Blockly.Python["rgb_led_color"] = function(block: Blockly.BlockSvg): string {
		const led: string = Blockly.Python.nameDB_.getName(block.getFieldValue("led"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${led}.color = (${parameters})\n`;
		return code;
	};

	Blockly.Python["buzzer_setup"] = function(block: Blockly.BlockSvg): string {
		const buzzer: string = Blockly.Python.nameDB_.getName(block.getFieldValue("buzzer"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${buzzer} = Buzzer(${parameters})\n`;
		return code;
	};

	Blockly.Python["buzzer_action"] = function(block: Blockly.BlockSvg): string {
		const buzzer: string = Blockly.Python.nameDB_.getName(block.getFieldValue("buzzer"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${buzzer}.${action}()\n`;
		return code;
	};

	Blockly.Python["motor_setup"] = function(block: Blockly.BlockSvg): string {
		const motor: string = Blockly.Python.nameDB_.getName(block.getFieldValue("motor"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${motor} = Motor(${parameters})\n`;
		return code;
	};

	Blockly.Python["motor_action"] = function(block: Blockly.BlockSvg): string {
		const motor: string = Blockly.Python.nameDB_.getName(block.getFieldValue("motor"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${motor}.${action}()\n`;
		return code;
	};

	Blockly.Python["servo_setup"] = function(block: Blockly.BlockSvg): string {
		const servo: string = Blockly.Python.nameDB_.getName(block.getFieldValue("servo"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${servo} = Servo(${parameters})\n`;
		return code;
	};

	Blockly.Python["servo_action"] = function(block: Blockly.BlockSvg): string {
		const servo: string = Blockly.Python.nameDB_.getName(block.getFieldValue("servo"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${servo}.${action}()\n`;
		return code;
	};

	Blockly.Python["servo_value"] = function(block: Blockly.BlockSvg): string {
		const servo: string = Blockly.Python.nameDB_.getName(block.getFieldValue("servo"), Blockly.VARIABLE_CATEGORY_NAME);
		const value: string = Blockly.Python.valueToCode(block, "value", 0);
		const code: string = `${servo}.value = ${value}\n`;
		return code;
	};

	Blockly.Python["led_board_setup"] = function(block: Blockly.BlockSvg): string {
		const leds: string = Blockly.Python.nameDB_.getName(block.getFieldValue("leds"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${leds} = LEDBoard(${parameters})\n`;
		return code;
	};

	Blockly.Python["led_board_action"] = function(block: Blockly.BlockSvg): string {
		const leds: string = Blockly.Python.nameDB_.getName(block.getFieldValue("leds"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${leds}.${action}()\n`;
		return code;
	};

	Blockly.Python["traffic_lights_setup"] = function(block: Blockly.BlockSvg): string {
		const traffic: string = Blockly.Python.nameDB_.getName(block.getFieldValue("traffic"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${traffic} = TrafficLights(${parameters})\n`;
		return code;
	};

	Blockly.Python["traffic_lights_action"] = function(block: Blockly.BlockSvg): string {
		const traffic: string = Blockly.Python.nameDB_.getName(block.getFieldValue("traffic"), Blockly.VARIABLE_CATEGORY_NAME);
		const color: string = block.getFieldValue("color");
		const action: string = block.getFieldValue("action");
		const code: string = `${traffic}.${color}.${action}()\n`;
		return code;
	};

	Blockly.Python["energenie_setup"] = function(block: Blockly.BlockSvg): string {
		const device: string = Blockly.Python.nameDB_.getName(block.getFieldValue("device"), Blockly.VARIABLE_CATEGORY_NAME);
		const parameters: string = Blockly.Python.valueToCode(block, "parameters", 0);
		const code: string = `${device} = Energenie(${parameters})\n`;
		return code;
	};

	Blockly.Python["energenie_action"] = function(block: Blockly.BlockSvg): string {
		const device: string = Blockly.Python.nameDB_.getName(block.getFieldValue("device"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${device}.${action}()\n`;
		return code;
	};

	Blockly.Python["motor_setup"] = function(block: Blockly.BlockSvg): string {
		const robot: string = Blockly.Python.nameDB_.getName(block.getFieldValue("robot"), Blockly.VARIABLE_CATEGORY_NAME);
		const code: string = `${robot} = CamJamKitRobot()\n`;
		return code;
	};

	Blockly.Python["motor_action"] = function(block: Blockly.BlockSvg): string {
		const robot: string = Blockly.Python.nameDB_.getName(block.getFieldValue("robot"), Blockly.VARIABLE_CATEGORY_NAME);
		const action: string = block.getFieldValue("action");
		const code: string = `${robot}.${action}()\n`;
		return code;
	};
}