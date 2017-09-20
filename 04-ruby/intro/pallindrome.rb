# input = 'abc'
#
# if input  == input.reverse
#   puts 'yes'
# else
#   puts 'no'
# end
# #
# if input.gsub(/[\W]\s/,"") == input.gsub(/[\W]\s/,"").reverse
#   puts 'yes'
# else
#   puts 'no'
# end

def palindrome(str)
  stripped = str.gsub(/[^\w]/,'').downcase
  if stripped == stripped.reverse
    return true
  else
    return false
  end
end

puts palindrome('racecar')
