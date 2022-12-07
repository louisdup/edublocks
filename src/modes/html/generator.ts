export const htmlGenerator: Blockly.Generator = new Blockly.Generator("HTML");

htmlGenerator.finish = (code: string): string => {
	return code;
};

htmlGenerator.scrub_ = (block: Blockly.BlockSvg, code: string): string => {
	const nextBlock: Blockly.BlockSvg = block.nextConnection && block.nextConnection.targetBlock();
	const nextCode: string = htmlGenerator.blockToCode(nextBlock) as string;
	return `${code}${nextCode}`;
};