class TipsController < ApplicationController
  def show
    @tip = Tip.find(params[:id])
    # render :details - optional to rename later, show is convention
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    @content_html = markdown.render(@tip.content)
  end
  def index
    # show all tips
    @tips = Tip.all
  end
  def new
    # add a new tip
  end
  def create
    tip = Tip.new
    tip.title = params[:title]
    tip.content = params[:content]
    tip.save
    redirect_to '/tips'
  end
  def edit
    @tip = Tip.find(params[:id])
  end
  def update
    tip = Tip.find(params[:id])
    tip.title = params[:title]
    tip.content = params[:content]
    tip.save
    redirect_to "/tips/#{tip.id}"
  end
end
