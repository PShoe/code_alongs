# def robot_speak(message)
#   puts message
# end
#
# def robot_walk(distance)
#   puts "Walk #{ distance } kilometers"
# end

require 'pry'

class Robot
  def initialize(name)
     @name = name
     @items = []
  end
  def speak(message)
    puts "#{@name} said #{message}"
  end
  def walk(distance)
    puts "Walk #{ distance } kilometers"
  end
end

Robert = Robot.new('Robert')

# Robot.new

binding.pry
