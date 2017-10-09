class TipsController < ApplicationController
  def show
    @tip = Tip.find(params[:id])
    # render :show - optional
  end
  def index
    # show all tips
    @tips = Tip.all
  end
end
