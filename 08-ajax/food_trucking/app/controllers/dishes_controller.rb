class DishesController < ApplicationController
  def index
    @dishes = Dish.all
  end
  def show
    @dish = Dish.find(params[:id])
  end
  def new
    @dish = Dish.new
  end
  def create
    dish = Dish.new
    dish.image = params[:dish][:image]
    dish.save
    redirect_to '/dishes'
  end
end
