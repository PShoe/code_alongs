require 'pry'

person = 'kasun'

def walk(name)
  "#{ name } is walking"
end

puts walk(person)

the_one = ''

['a','b','c'].each do |letter|
  if letter == 'a'
    the_one = letter
  end
end

puts the_one

binding.pry
