/**
 *
 * 顶部空白条。当系统为iOS时可用来让当前时间和电池信息等得以显示。 
 *
 * 使用方法：设置width —> 设置height —> setColor() —> draw() 。
 * 
 */
// 对于刘海屏问题，IOS Native无需使用TopSpace，把data-scale-mode设为“showAll”即可解决。微信小游戏此问题尚未解决。
class CTopSpace_Eyelen extends egret.DisplayObjectContainer{
	public constructor() {
    	super();
    	this.m_space = new egret.Shape();
    	this.m_space.x = 0;
    	this.m_space.y = 0;
    	this.addChild(this.m_space);
	}
	private m_space:egret.Shape;
	private m_color:number;

	public m_width = 300;
	public m_height = 200;

	public setColor(clr:number):void
	{
    	this.m_color = clr;
	}

	public draw():void
	{
		this.m_space.width = this.m_width;
		this.m_space.height = this.m_height;
      this.m_space.graphics.clear();
    	this.m_space.graphics.beginFill(this.m_color);
    	this.m_space.graphics.drawRect(0,0,this.width,this.height);
    	this.m_space.graphics.endFill();
	}

	public redraw():void
	{
	    this.draw();
	}
}
