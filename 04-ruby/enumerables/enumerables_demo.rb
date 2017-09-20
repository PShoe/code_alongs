require 'pry'

numbers = [2,3,4,5,6,7]

new_set_numbers = numbers.select do |num|
  num.even?
end

binding.pry

puts 'err numbers'
